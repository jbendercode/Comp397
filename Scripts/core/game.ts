console.log("Game is opening...");

var canvas : HTMLElement;
var stage : createjs.Stage;

function init(){
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
function gameLoop(event : createjs.TickerEvent) : void {
    // Initialize text value
    var boilerPlateText : createjs.Text = new createjs.Text("Comp 397 - Boiler Plate", 
                                                            "60px Consolas", "#FFF");
                                                            
    stage.addChild(boilerPlateText);
    
    stage.update();
}