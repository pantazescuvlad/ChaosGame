var canvas = document.getElementById("window");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
var sliderSpeed;

var slider = document.getElementById("slider");
slider.oninput = function() {
    sliderSpeed = this.value;
}

var nrOfDots = 10000; //number of dots that will be drawn on the canvas 
var dotSize = 1; //size of a single dot

function display() {
    console.log(canvas.width);
    ctx.fillStyle = "#000000";  //background color
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#FFFFFF";  //dots color

    console.log(canvasWidth);

    displayTriangle();
 }

async function displayTriangle(){    
    //first point
    var x = (canvasWidth/2 + canvasWidth) / 2;
    var y = canvasHeight/2;
    ctx.fillRect(x, y, dotSize, dotSize);

    var z = 0;
    for(let i = 0; i < nrOfDots; ++i){
        let randLatura = Math.floor(Math.random() * 3);
        if(randLatura == 0){
            x -= (x - canvasWidth/2) / 2;
            y = y / 2;
        }else if(randLatura == 1){
            x = x / 2;
            y += (canvasHeight - y) / 2;
        }else {
            x += (canvasWidth - x) / 2;
            y += (canvasHeight - y) / 2;
        }
        drawOneDot(x, y, dotSize);
        await sleep(sliderSpeed/100);   //delay
    }
 }

function drawOneDot(x, y, dotSize){
    ctx.fillRect(x, y, dotSize, dotSize);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }