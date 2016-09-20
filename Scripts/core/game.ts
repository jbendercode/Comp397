console.log("Game is opening...");

var canvas : HTMLElement;
var stage : createjs.Stage;
var playButton: createjs.Bitmap;

function init(){
    // Initialize game elements
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    
    // Initialize text value
    var boilerPlateText : createjs.Text = new createjs.Text("Comp 397 - Boiler Plate", 
                                                            "26px Consolas", "#FFF");
    boilerPlateText.x = 50;
    boilerPlateText.y = 20;
    // Initialize image
    var image = new Image();
    image.src = "../../Assets/images/reticle.png";
    var img = new createjs.Bitmap(image);
    img.scaleX = 0.25;
    img.scaleY = 0.25;
    img.x = 400;
    img.y = 20;
    stage.addChild(img);
    
    stage.addChild(boilerPlateText);
    
    // Enable mouseover and tracking
    stage.enableMouseOver(20);
    
    // Set FPS
    createjs.Ticker.setFPS(60);
    
    // Set up event listener for update loop
    createjs.Ticker.on("tick", gameLoop, this);
    
}

// Update loop
function gameLoop(event : createjs.TickerEvent) : void {
    stage.update();
}

init();