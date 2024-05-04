/*export */ interface Scores {
    player1: number;
    player2: number;
}

enum State {
    STOPPED = "STOPPED",
    STARTED = "STARTED",
}

enum GameControls {
    GAME_START = "Enter",
    PADDLE_1_UP = "w",
    PADDLE_1_DOWN = "s",
    PADDLE_2_UP = "ArrowUp",
    PADDLE_2_DOWN = "ArrowDown",
}

interface Velocity {
    x: number;
    y: number;
}

export { Scores, State, GameControls, Velocity };
