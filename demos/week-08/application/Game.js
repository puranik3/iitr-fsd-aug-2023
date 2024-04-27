import {
    WIDTH,
    HEIGHT,
    CELLSIZE,
    SPEED,
    MAX_LEVEL,
    COLORS
} from './constants.js';

import Grid from './Grid.js';
import Worm from './Worm.js';

class Game {
    constructor() {
        // create a canvas DOM node and store in a canvas data member
        // add it to the DOM
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);

        // set physical size in px (style.width, style.height)
        this.canvas.style.width = WIDTH * CELLSIZE + 'px';
        this.canvas.style.height = HEIGHT * CELLSIZE + 'px';

        // set logical size as absolute values (width, height)
        this.canvas.width = WIDTH * CELLSIZE;
        this.canvas.height = HEIGHT * CELLSIZE;

        // create a configuration data member to share across the app
        // level, speed, width, height, nbCellsX, nbCellsY, cellSideLength, color
        this.configuration = {
            level: 0,
            speed: SPEED,
            width: this.canvas.width,
            height: this.canvas.height,
            nbCellsX: WIDTH,
            nbCellsY: HEIGHT,
            cellSideLength: CELLSIZE,
            color: COLORS[0]
        };

        // score data member
        this.score = 0;

        // grid and worm data members
        this.grid = new Grid(this);
        this.worm = new Worm(this);

        // set 'keydown' handler
        document.addEventListener('keydown', this.onKeyDown);
    }

    start() {
        console.log('started');
        // set running, nextMove
        this.running = true;
        this.nextMove = 0; // start moving the worm without any delay

        // start the game loop
        requestAnimationFrame(this.loop);
    }

    stop() {
        // unset running
        // code...
    }

    // executes once every 16.6666ms
    loop = (time) => {
        // console.log('loop');
        // execute only if game is running
        if (this.running) {
            // set loop to run again before next display refresh
            requestAnimationFrame(this.loop);

            // execute loop logic only if it is time for the next change in display (nextMove)
            // set up nextMove time
            // executes once in ~200ms
            if (time > this.nextMove) {
                this.nextMove = time + this.configuration.speed;
                // console.log('update the screen');

                // move the snake
                this.worm.move();

                // check game state and switch based on it
                switch (this.checkState()) {
                    // -1 -> game is over
                    case -1:
                        this.gameOver();
                        break;
                    //  1 -> apple eaten -> grow the worm, add score, eat apple, and check if level is complete
                    case 1:
                        this.worm.grow();
                        this.score += 100;
                        this.grid.eat(this.worm.head);

                        // is level over?
                        if (this.grid.isDone()) {
                            this.levelUp();
                        }
                        break;
                    default:
                        this.paint();
                }
            }
        }
    }

    levelUp() {
        // increase score, level
        this.score += 1000;
        ++this.configuration.level;

        // if not completed last level...
        if (this.configuration.level < MAX_LEVEL) {
            // change speed, change color, and seed the grid with apples
            this.configuration.color = COLORS[this.configuration.level];
            this.configuration.speed -= 7;
            this.grid.seed();
        } else {
            // else end game (win)
            this.win();
        }
    }

    win() {
        // declare win and stop
        this.running = false;
        alert("Bravo! You are a pro at this game!");
    }

    gameOver() {
        // declare game over and stop
        this.running = false;
        alert("Game over! Better luck next time!");
    }

    checkState() {
        // get worm head cell
        const head = this.worm.head;

        // if cell is outside grid, or cell is worm tail cell, return -1 (game over)
        if (this.isOutside(head) || this.worm.isWorm(head)) {
            return -1;
        }

        // if cell is an apple, return 1
        if (this.grid.isApple(head)) {
            return 1;
        }

        // nothing special happened - return 0
        return 0;
    }

    isOutside(cell) {
        // return true/false based on worm head cell is inside or outside the grid
        const { nbCellsX, nbCellsY } = this.configuration;

        return cell.x < 0 || cell.x >= nbCellsX || cell.y < 0 || cell.y >= nbCellsY;
    }

    paint() {
        // get required details from the game configuration
        const { color, width, height } = this.configuration;

        // get canvas context and set fillStyle and call fillRect
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);

        // draw the grid and the worm
        this.grid.draw(ctx);
        this.worm.draw(ctx);
    }

    onKeyDown = (event) => {
        event.preventDefault();

        const key = event.key;

        // check event.key, preventDefault() and set worm direction
        switch (key) {
            case 'ArrowUp':
                this.worm.setDirection('Up');
                break;
            case 'ArrowDown':
                this.worm.setDirection('Down');
                break;
            case 'ArrowRight':
                this.worm.setDirection('Right');
                break;
            case 'ArrowLeft':
                this.worm.setDirection('Left');
                break;
        }
    }
}

const xyz = 123;

// export the Game class (default)

// named export (any number of named exports)
// export {
//     Game,
//     xyz
// }

export {
    xyz
};

export default Game;
// export default xyz; // A module cannot have more than 1 default exports