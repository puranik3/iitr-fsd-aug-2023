class Worm {
    // define static data member - INITIAL_SIZE, INITIAL_DIRECTION, INITIAL_POSITION
    // code...

    constructor(game) {
        // define game, size, direction, head, tail
        // code...
    }

    draw(context) {
        // get required details from the game configuration
        // code...

        // paint the head with the eye
        const size = cellSideLength / 10;
        const offset = cellSideLength / 3;
        const x = cellSideLength * this.head.x;
        const y = cellSideLength * this.head.y;

        context.fillStyle = "#111111";
        context.fillRect(x, y, cellSideLength, cellSideLength);

        // paint the eyes
        switch (this.direction) {
            case "Up":
                context.beginPath();
                context.arc(x + offset, y + offset, size, 0, 2 * Math.PI);
                context.arc(x + 2 * offset, y + offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
            case "Down":
                context.beginPath();
                context.arc(x + offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.arc(x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
            case "Right":
                context.beginPath();
                context.arc(x + 2 * offset, y + offset, size, 0, 2 * Math.PI);
                context.arc(x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
            case "Left":
                context.beginPath();
                context.arc(x + offset, y + offset, size, 0, 2 * Math.PI);
                context.arc(x + offset, y + 2 * offset, size, 0, 2 * Math.PI);
                context.fillStyle = "white";
                context.fill();
                break;
        }

        // paint the tail
        // set fillStyle to "#333333" and paint the tail cells
        // code...
    }

    move() {
        // the current head becomes a tail cell
        // code...

        // call getNext() to get the new head cell
        // code...

        // first item (this is the last tail cell - the one farthest from the head)
        // last item (this is the tail cell closes to the head)
        // if tail cells exceed tail length, remove the last cell using shift() (first in the array)
        // code...
    }

    getNext() {
        // get the new head cell { x, y } based on the current direction
        // code...
    }

    getHead() {
        // return head cell
        // code...
    }

    isWorm(cell) {
        // return boolean / object based on whether cell is a tail cell (use find())
        // code...
    }

    grow(qty = 3) {
        // increase size by qty
        // code...
    }

    setDirection(direction) {
        // the snake cannot take a U-turn. Based on this set the new direction.
        // code...
    }
}

// export the Worm class (default)
// code...