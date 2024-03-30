const cells = document.querySelectorAll('.grid > div');
const message = document.querySelector('.message');
const btn = document.querySelector('.btnStart');

let cellValues;
let nextPlayer;
let isGameOver;

const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

function showNextPlayer() {
    message.innerText = `The next player is ${nextPlayer}`;
}

function startGame() {
    cellValues = ['', '', '', '', '', '', '', '', ''];
    nextPlayer = 'X';
    isGameOver = false;

    btn.disabled = true;
    showNextPlayer();
}

function gameOver() {
    for (let idx = 0; idx < winningStates.length; ++idx) {
        const winningState = winningStates[idx];
        const x = winningState[0];
        const y = winningState[1];
        const z = winningState[2];

        console.log(x, y, z);

        if (cellValues[x] !== '' && cellValues[x] === cellValues[y] && cellValues[y] === cellValues[z]) {
            return true;
        }
    }

    // could also be a draw
    const isDraw = cellValues.every(function (item) {
        return item !== ''
    });

    if (isDraw) {
        return 'draw';
    }

    return 'not over';
}

function switchPlayer() {
    if (nextPlayer === 'X') {
        nextPlayer = 'O';
    } else {
        nextPlayer = 'X';
    }

    showNextPlayer();
}

function onCellClick(event) {
    const cell = event.target;

    if (isGameOver === false) {
        // alert('Cell was clicked');
        const idx = cell.getAttribute('data-idx');
        if (cellValues[idx] !== '') {
            alert('You cannot click on this cell as it has been taken');
            return;
        }

        cell.innerText = nextPlayer;
        cellValues[idx] = nextPlayer;

        if (gameOver()) {
            alert('Game is over');
            return;
        }

        switchPlayer();
    }
}

btn.addEventListener('click', startGame);

cells.forEach(function (cell) {
    cell.addEventListener('click', onCellClick);
});