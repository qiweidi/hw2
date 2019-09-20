function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();

  //RED RECT
  fill(255, 0, 0);
  rect(0, 0, 180, 220);
  
  //Blue RECT
  fill(0, 0, 139);
  rect(365, 220, 100, 80);
  
  //line #1
  stroke(0);
  strokeWeight(10);
  line(0,220, 399, 220);

  //line #2
  line(180, 0, 180, 399);

  //line #3
  line(365, 220, 365, 399);
  
  //line #4
  line(365, 300, 399, 300);
  
  //line #5
  line(180, 370, 365, 370);

  //line #6
  line(270, 370, 270, 399);
  
  //Yellow RECT
  fill(255,255,0);
  rect(180,370, 90, 40);
  
  //Black Rect
  fill(0, 0, 0);
  rect(270, 370, 90, 80);{
}






