const board = document.querySelector( '.board' );
const ball = document.querySelector( '.ball' );
const paddle_1 = document.querySelector( '.paddle_1' );
const paddle_2 = document.querySelector( '.paddle_2' );
const score_1 = document.querySelector( '.player_1_score' );
const score_2 = document.querySelector( '.player_2_score' );
const message = document.querySelector( '.message' );

class Game {
    // game state (data members)
    

    // bind listeners at the start of the game
    start() {
        
    }

    // to reset game state on completion of a rally
    reset() {
        
    }

    // set up event handling - handle 'keydown' event - check event.key and react to 'Enter' or one of the 4 player controls ('w', 's', 'ArrowUp', 'ArrowDown')
    bindListeners() {
        
    }

    // generate a random velocity and return it
    getVelocity() {
        
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
    moveBall( velocity ) {
        // if ball hits the top or bottom edge, we need to change the direction
        


        // if ball hits the paddle, we need to change the direction (with a different velocity ideally)
        


        // ball moved out of right edge - player 1 wins
        

        
        // ball moved out of left edge - player 2 wins
        


        // move the ball by updating values for top, left styles inline
        

        // get the new ball_coord using ball.getBoundingClientRect()
        

        // set up recursive call of game loop (moveBall) before next display refresh
        
    }
}

// create and start the game
