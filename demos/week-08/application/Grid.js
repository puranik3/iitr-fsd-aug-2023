import { APPLES } from "./constants.js";
class Grid {
    constructor(game) {
        // set game, apples and call seed()
        this.game = game;
        this.apples = [];
        this.seed();
        console.log(this.apples);
    }

    seed() {
        // get required details from the game configuration
        const { nbCellsX, nbCellsY, level } = this.game.configuration;

        // calculate nbApples for the level
        const nbApples = APPLES * (level + 1);

        // randomly generate cells for apples and add to apples[{ x, y }, ...] 
        for (let i = 0; i < nbApples; ++i) {
            const x = Math.floor(Math.random() * nbCellsX);
            const y = Math.floor(Math.random() * nbCellsY);

            this.apples.push({
                x: x,
                y: y
            })
        }
    }

    draw(context) {
        // get required details from the game configuration
        const { width, height, cellSideLength } = this.game.configuration;

        // set fillStyle ('black') and lineWidth
        context.fillStyle = 'black';
        context.lineWidth = 1;

        // vertical lines (use beginPath(), moveTo(), lineTo(), stroke())
        for (let x = 0; x <= width; x += cellSideLength) {
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }

        // horizontal lines
        for (let y = 0; y <= width; y += cellSideLength) {
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }

        // apples
        // set fillStyle ('red') and draw the apples
        context.fillStyle = 'red';
        this.apples.forEach(
            apple =>
                context.fillRect(apple.x * cellSideLength, apple.y * cellSideLength, cellSideLength, cellSideLength)
        );
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
export default Grid;