class Grid {
    constructor(game) {
        // set game, apples and call seed()
        // code...
    }

    seed() {
        // get required details from the game configuration
        // code...

        // calculate nbApples for the level
        // code...

        // randomly generate cells for apples and add to apples[{ x, y }, ...] 
        // code...
    }

    draw(context) {
        // get required details from the game configuration
        // code...

        // set fillStyle ('black') and lineWidth
        // code...

        // vertical lines (use beginPath(), moveTo(), lineTo(), stroke())
        // code..

        // horizontal lines
        // code...

        // apples
        // set fillStyle ('red') and draw the apples
        // code...
    }

    isApple(cell) {
        // return true/false (or object/null) based on whether cell has an apple (use find())
        // code...
    }

    eat(cell) {
        // remove apple at cell (use filter(), and reset apples[])
        // code...
    }

    isDone() {
        // done if there are no apples
        // code...
    }
}

// export the Grid class (default)
// code...