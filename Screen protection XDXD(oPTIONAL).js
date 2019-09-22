var radX1 = 40;
var xpos, ypos;

var xspeed = 2.8;
var yspeed = 2.2;

var xdirection = 1;
var ydirection = 1;

var radX2 = 60;
var xpos2, ypos2;

var xspeed2 = 3.4;
var yspeed2 = 3.6;

var xdirection2 = 1;
var ydirection2 = 1;

var radX3 = 80;
var xpos3, ypos3;

var xspeed3 = 2.5;
var yspeed3 = 2.8;

var xdirection3 = 1;
var ydirection3 = 1;

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(70);
  ellipseMode(RADIUS);

  xpos = width / 2;
  ypos = height / 3;

  xpos2 = width / 4;
  ypos2 = height / 5;

  xpos3 = width / 2;
  ypos3 = height / 3;
}

function draw() {
  background(0);


  ellipse(xpos, ypos, radX1, radX1);
  fill(255, 0, 0);

  ellipse(xpos2, ypos2, radX2, radX2);
  fill(255, 225, 0);

  ellipse(xpos3, ypos3, radX3, radX3);
  fill(0, 225, 255);


  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  xpos2 = xpos2 + xspeed2 * xdirection2;
  ypos2 = ypos2 + yspeed2 * ydirection2;

  xpos3 = xpos3 + xspeed3 * xdirection3;
  ypos3 = ypos3 + yspeed3 * ydirection3;


  if (xpos > width - radX1 || xpos < radX1) {
    xdirection *= -1;
  }
  if (ypos > height - radX1 || ypos < radX1) {
    ydirection *= -1;
  }
  if (xpos2 > width - radX2 || xpos2 < radX2) {
    xdirection2 *= -1;
  }
  if (ypos2 > height - radX2 || ypos2 < radX2) {
    ydirection2 *= -1;
  }
  if (xpos3 > width - radX3 || xpos3 < radX3) {
    xdirection3 *= -1;
  }
  if (ypos3 > height - radX3 || ypos3 < radX3) {
    ydirection3 *= -1;
  }
}
