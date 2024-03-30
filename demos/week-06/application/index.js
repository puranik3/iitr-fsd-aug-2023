var cells = document.querySelectorAll( '.grid > *' ); // a list of cell DOM nodes
var messageEl = document.querySelector( '.message' );
var btnStartEl = document.querySelector( '.btn-start' );

// console.log( cells );
// console.log( messageEl );
// console.log( btnStartEl );

// game state
var started = false;
var nextPlayer = 'X';
var state = [ 
    '', '', '',
    '', '', '',
    '', '', ''
];

// winning states
var winningStates = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
];

function gameOver() {
    for( var i = 0; i < winningStates.length; ++i ) {
        var x = winningStates[i][0];
        var y = winningStates[i][1];
        var z = winningStates[i][2];

        if( state[x] !== '' && state[x] === state[y] && state[y] === state[z] ) {
            messageEl.innerText = nextPlayer + ' has won!';
            return true;
        }
    }

    for( var i = 0; i < state.length; ++i ) {
        if( state[i] === '' ) {
            return false; // game is not over yet
        }
    }

    // game is over
    messageEl.innerText = 'Game over!';
    return true;
}

function onCellClick( index ) {
    if( !started ) {
        alert( 'Click on start button to start the game' );
        return;
    }

    if( state[index] !== '' ) {
        alert( 'That cell is taken' );
        return;
    }

    state[index] = nextPlayer;
    cells[index].innerText = nextPlayer;

    if( gameOver() ) {
        started = false;
        return;
    }

    nextPlayer = ( nextPlayer === 'X' ) ? 'O' : 'X';
    displayNextPlayer();
}

function clearBoard() {
    cells.forEach(function( cell ) {
        cell.innerText = '';
    });
}

function displayNextPlayer() {
    messageEl.innerText = 'Next turn : ' + nextPlayer;
}

function startGame() {
    started = true;
    nextPlayer = 'X';
    state = [ 
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    clearBoard();
    displayNextPlayer();
}


// setup code to run on cell click
cells.forEach(function( cell, index ) {
    cell.addEventListener( 'click', function() {
        // console.log( index );
        onCellClick( index )
    });
});

// setup code to run on start button click
btnStartEl.addEventListener( 'click', startGame );