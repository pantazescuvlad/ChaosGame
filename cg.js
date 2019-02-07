var canvas = document.getElementById("window");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");

var nrOfDots = 100;//number of dots that will be drawn on the canvas 

function display() {
    ctx.fillStyle = "#FFFFFF";
    
    for(let i = 0; i < nrOfDots; ++i){
        let x = Math.floor(Math.random() * canvasWidth);
        let y = Math.floor(Math.random() * canvasHeight);

        ctx.fillRect(x, y, 1, 1);
    }
 }
