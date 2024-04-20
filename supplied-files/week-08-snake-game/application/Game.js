class Game {
    constructor() {
        // create a canvas DOM node and store in a canvas data member
        // code...

        // add it to the DOM
        // code...

        // set physical size in px (style.width, style.height)
        // code...

        // set logical size as absolute values (width, height)
        // code...

        // create a configuration data member to share across the app
        // level, speed, width, height, nbCellsX, nbCellsY, cellSideLength, color
        // code...

        // score data member
        // code...

        // grid and worm data members
        // code...

        // set 'keydown' handler
        // code...
    }

    start() {
        // set running, nextMove
        // code...

        // start the game loop
        // code...
    }

    stop() {
        // unset running
        // code...
    }

    loop = (time) => {
        // execute only if game is running
        // set loop to run again before next display refresh
        // code...

        // execute loop logic only if it is time for the next change in display (nextMove)
        // set up nextMove time
        // code...

        // move the snake
        // code...

        // check game state and switch based on it
        // -1 -> game is over
        //  1 -> apple eaten -> grow the worm, add score, eat apple, and check if level is complete
        //  default -> repaint
    }

    levelUp() {
        // increase score, level
        // code...

        // if not completed last level...
        // change speed, change color, and seed the grid with apples
        // code...

        // else end game (win)
        // code...
    }

    win() {
        // declare win and stop
        // code...
    }

    gameOver() {
        // declare game over and stop
        // code...
    }

    checkState() {
        // get worm head cell
        // code...

        // if cell is outside grid, or cell is worm tail cell, return -1 (game over)
        // code...

        // if cell is an apple, return 1
        // code...

        // nothing special happened - return 0
        // code...
    }

    isOutside(cell) {
        // return true/false based on worm head cell is inside or outside the grid
        // code...
    }

    paint() {
        // get required details from the game configuration
        // code...

        // get canvas context and set fillStyle and call fillRect
        // code...

        // draw the grid and the worm
        // code...
    }

    onKeyDown = (event) => {
        // check event.key, preventDefault() and set worm direction
        // code...
    }
}

// export the Game class (default)
// code...