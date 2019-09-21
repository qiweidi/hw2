function setup() {
  createCanvas(600, 400);
}

var ballX = 50;
var ballSpeed = 8;

var ballX2 = 50;
var ballSpeed2 = 8;

function draw() {
  background(220);
  
  fill(255,0,0)
  ellipse(150, ballX, 50);
  
  fill(0,255,0)
  ellipse(250, ballX2, 50);
  
  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  
  if (ballX >= height) {
    ballSpeed = -8;
  }
  
  if (ballX2 >= height) {
    ballSpeed2 = ballSpeed2 * -1;
  }
    
  if (ballX <= 0) {
    ballSpeed = 8;
  }
    
   if (ballX2 <= 0) {
    ballSpeed2 = ballSpeed2 * -1;
  }
}
