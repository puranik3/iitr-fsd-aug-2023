import { Scores, State, GameControls, Velocity } from "./types.js";
import { random } from "./utils.js";

const board = document.querySelector(".board") as HTMLElement;
const ball = document.querySelector(".ball") as HTMLElement;
const paddle_1 = document.querySelector(".paddle_1") as HTMLElement;
const paddle_2 = document.querySelector(".paddle_2") as HTMLElement;
const score_1 = document.querySelector(".player_1_score") as HTMLElement;
const score_2 = document.querySelector(".player_2_score") as HTMLElement;
const message = document.querySelector(".message") as HTMLElement;

let ball_coord = ball.getBoundingClientRect();
let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();
const board_coord = board.getBoundingClientRect();

// const ball_left = ball_coord.left;
// const ball_top = ball_coord.top;

class Game {
    // game state (data members)
    private scores: Scores = {
        player1: 0,
        player2: 0,
    };
    private state = State.STOPPED;
    private SPEED = 0.085;

    // constructor( scores : Scores ) {
    //     this.scores = scores;
    // }

    // bind listeners at the start of the game
    start() {
        this.bindListeners();
    }

    // to reset game state on completion of a rally
    reset() {
        this.state = State.STOPPED;
        message.innerText = "Press Enter to Start";
        ball.style.left = "";
        ball.style.top = "";
    }

    // set up event handling - handle 'keydown' event - check event.key and react to 'Enter' or one of the 4 player controls ('w', 's', 'ArrowUp', 'ArrowDown')
    bindListeners() {
        document.addEventListener("keydown", (event) => {
            // this -> document (by default) -> function() {}
            // this -> Game class object -> carried over from bindListener() method -> () => {}

            console.log(this);

            const key = event.key;
            console.log(key);

            switch (key) {
                case GameControls.GAME_START:
                    if (this.state === State.STARTED) {
                        return;
                    }

                    this.state = State.STARTED;
                    message.innerText = "Game on"!;
                    requestAnimationFrame(() => {
                        const velocity = this.getVelocity();
                        this.moveBall(velocity);
                    });
                    break;
                case GameControls.PADDLE_1_UP:
                    paddle_1.style.top =
                        Math.max(
                            paddle_1_coord.top -
                                this.SPEED * window.innerHeight,
                            board_coord.top
                        ) + "px";
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                    break;
                case GameControls.PADDLE_1_DOWN:
                    paddle_1.style.top =
                        Math.min(
                            paddle_1_coord.top +
                                this.SPEED * window.innerHeight,
                            board_coord.bottom - paddle_1_coord.height
                        ) + "px";
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                    break;
                case GameControls.PADDLE_2_UP:
                    paddle_2.style.top =
                        Math.max(
                            paddle_2_coord.top -
                                this.SPEED * window.innerHeight,
                            board_coord.top
                        ) + "px";
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                    break;
                case GameControls.PADDLE_2_DOWN:
                    paddle_2.style.top =
                        Math.min(
                            paddle_2_coord.top +
                                this.SPEED * window.innerHeight,
                            board_coord.bottom - paddle_1_coord.height
                        ) + "px";
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                    break;
            }
        });
    }

    // generate a random velocity and return it
    getVelocity() {
        let x = random(3, 8);
        const xMult = random(0, 1) === 0 ? -1 : 1;
        x = x * xMult;

        let y = random(3, 8);
        const yMult = random(0, 1) === 0 ? -1 : 1;
        y = y * yMult;

        return {
            x: x, // 3 - 8, -3 - -8
            y: y, // 3 - 8, -3 - -8
        } as Velocity;
    }

    // generate a random velocity to be set when ball bounces off a player's paddle (bat), and return it
    // bounce( velocity ) {
    //     let newVelocity = this.getVelocity();

    //     // set opposite direction for x, and maintain direction for y
    //     let curXDirection = velocity.dx > 0 ? 1 : -1;
    //     let curYDirection = velocity.dy > 0 ? 1 : -1;

    //     newVelocity.dx = Math.abs( newVelocity.dx ) * -curXDirection;
    //     newVelocity.dy = Math.abs( newVelocity.dy ) * curYDirection;

    //     return newVelocity;
    // };

    // game loop
    moveBall(velocity: Velocity) {
        console.log("moveBall");
        // if ball hits the top or bottom edge, we need to change the direction
        if (
            ball_coord.top <= board_coord.top ||
            ball_coord.bottom >= board_coord.bottom
        ) {
            velocity.y = -velocity.y;
        }

        // if ball hits the paddle, we need to change the direction (with a different velocity ideally)
        // bouncing off the first paddle
        if (
            ball_coord.left <= paddle_1_coord.left &&
            ball_coord.top >= paddle_1_coord.top &&
            ball_coord.bottom <= paddle_1_coord.bottom
        ) {
            velocity.x = -velocity.x;
        }

        // bouncing off the first paddle
        if (
            ball_coord.right >= paddle_2_coord.left &&
            ball_coord.top >= paddle_2_coord.top &&
            ball_coord.bottom <= paddle_2_coord.bottom
        ) {
            velocity.x = -velocity.x;
        }

        // ball moved out of right edge - player 1 wins
        if (ball_coord.right >= board_coord.right) {
            ++this.scores.player1;
            score_1.innerText = "" + this.scores.player1;
            this.reset();
            return;
        }

        // ball moved out of left edge - player 2 wins
        if (ball_coord.left <= board_coord.left) {
            ++this.scores.player2;
            score_2.innerText = "" + this.scores.player2;
            this.reset();
            return;
        }

        // move the ball by updating values for top, left styles inline
        ball.style.top = ball_coord.top + velocity.y + "px";
        ball.style.left = ball_coord.left + velocity.x + "px";

        // get the new ball_coord using ball.getBoundingClientRect()
        ball_coord = ball.getBoundingClientRect();

        // set up recursive call of game loop (moveBall) before next display refresh
        requestAnimationFrame(() => {
            this.moveBall(velocity);
        });
    }
}

// create and start the game
const game = new Game();
game.start();
