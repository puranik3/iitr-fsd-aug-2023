var State;
(function (State) {
    State["STOPPED"] = "STOPPED";
    State["STARTED"] = "STARTED";
})(State || (State = {}));
var GameControls;
(function (GameControls) {
    GameControls["GAME_START"] = "Enter";
    GameControls["PADDLE_1_UP"] = "w";
    GameControls["PADDLE_1_DOWN"] = "s";
    GameControls["PADDLE_2_UP"] = "ArrowUp";
    GameControls["PADDLE_2_DOWN"] = "ArrowDown";
})(GameControls || (GameControls = {}));
export { State, GameControls };
