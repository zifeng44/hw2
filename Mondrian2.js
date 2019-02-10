function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(300, 400);
}

function draw() {
  var leftLineX = 60;
  var rightLineX = 260;
  var topLineY = 160;
  var middleLineY = 320;
  var bottomLineY = 360;

  background(240);
  noStroke();
  strokeCap(SQUARE);

  fill(220, 0, 0); 
  rect(leftLineX, 0, width-leftLineX, middleLineY);

  fill(0, 120, 255); 
  rect(0, middleLineY, leftLineX, height-middleLineY); 

  fill(255, 255, 0);  
  rect(rightLineX, bottomLineY, width-rightLineX, height-bottomLineY); 

  stroke(0); 
  strokeWeight(10);
  line(0, middleLineY, width, middleLineY);
  line(leftLineX, 0, leftLineX, height); 
  line(rightLineX, middleLineY, rightLineX, height); 

  strokeWeight(15);
  line(rightLineX, bottomLineY, width, bottomLineY); 

  strokeWeight(20);
  line(0, topLineY, leftLineX, topLineY); 
}
