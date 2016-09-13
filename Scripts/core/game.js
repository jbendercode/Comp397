console.log("Game is opening...");
var canvas;
var stage;
function init() {
    // Initialize game elements
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    // Enable mouseover and tracking
    stage.enableMouseOver(20);
    // Set FPS
    createjs.Ticker.setFPS(60);
    // Set up event listener for update loop
    createjs.Ticker.on("tick", gameLoop, this);
}
// Update loop
function gameLoop(event) {
    // Initialize text value
    var boilerPlateText = new createjs.Text("Comp 397 - Boiler Plate", "60px Consolas", "#FFF");
    this.stage.addChild(boilerPlateText);
    this.stage.update();
    this.simulate();
}
//# sourceMappingURL=game.js.map