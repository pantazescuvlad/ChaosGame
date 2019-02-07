var canvas = document.getElementById("window");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");

var nrOfDots = 10000; //number of dots that will be drawn on the canvas 
var dotSize = 1; //size of a single dot

function display() {
    ctx.fillStyle = "#FFFFFF";
    
    displayTriangle();
 }


 function displayTriangle(){
    
    canvasWidth -= dotSize;
    canvasWidth -= dotSize;
    
    //first point
    var x = (canvasWidth/2 + canvasWidth) / 2;
    var y = canvasHeight/2;
    ctx.fillRect(x, y, dotSize, dotSize);

    var x = 0;
    while(x < nrOfDots)
        setTimeout(function(){
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
        
            x++;
            
        }, 200);
 }

function drawOneDot(x, y, dotSize){
    ctx.fillRect(x, y, dotSize, dotSize);
}

function loop(){
    
}