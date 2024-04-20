class Worm {
    // define static data member - INITIAL_SIZE, INITIAL_DIRECTION, INITIAL_POSITION
    // code...

    constructor(game) {
        // define game, size, direction, head, tail
        this.game = game;
        this.direction = 'Right';
        this.head = {
            x: 1,
            y: 1
        };
        this.size = 3;
        this.tails = [];
    }

    draw(context) {
        // get required details from the game configuration
        const { cellSideLength } = this.game.configuration;

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
        context.fillStyle = '#333333';
        this.tails.forEach(
            tail =>
                context.fillRect(tail.x * cellSideLength, tail.y * cellSideLength, cellSideLength, cellSideLength)
        );
    }

    move() {
        // the current head becomes a tail cell
        this.tails.push(this.head);

        // call getNext() to get the new head cell
        this.head = this.getNext();

        // first item (this is the last tail cell - the one farthest from the head)
        // last item (this is the tail cell closes to the head)
        // if tail cells exceed tail length, remove the last cell using shift() (first in the array)
        if (this.tails.length > this.size) {
            this.tails.shift();
        }
    }

    getNext() {
        // get the new head cell { x, y } based on the current direction
        if (this.direction === 'Right') {
            return {
                x: this.head.x + 1,
                y: this.head.y
            };
        }

        if (this.direction === 'Left') {
            return {
                x: this.head.x - 1,
                y: this.head.y
            };
        }

        if (this.direction === 'Up') {
            return {
                x: this.head.x,
                y: this.head.y - 1
            };
        }

        if (this.direction === 'Down') {
            return {
                x: this.head.x,
                y: this.head.y + 1
            };
        }
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
        if (this.direction === 'Right' && direction === 'Left') {
            return;
        }

        if (this.direction === 'Left' && direction === 'Right') {
            return;
        }

        if (this.direction === 'Up' && direction === 'Down') {
            return;
        }

        if (this.direction === 'Down' && direction === 'Up') {
            return;
        }

        this.direction = direction;

        console.log(this.direction);
    }
}

// export the Worm class (default)
export default Worm;