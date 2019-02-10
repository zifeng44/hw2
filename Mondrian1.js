function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  var leftLineX = 190;
  var rightLineX = 300;
  var topLineY = 140;
  var middleLineY = 280;
  var bottomLineY = 345;

  background(240);
  noStroke();
  strokeCap(SQUARE);

  fill(220, 0, 0); // Red
  rect(leftLineX, 0, width-leftLineX, middleLineY); // Large red rectangle

  fill(0, 120, 255); // Blue
  rect(0, middleLineY, leftLineX, height-middleLineY); // Smaller blue rectangle

  fill(255, 255, 0);  // Yellow
  rect(rightLineX, bottomLineY, width-rightLineX, height-bottomLineY); // Yellow rectangle

  stroke(0); // Black
  strokeWeight(10);
  line(0, middleLineY, width, middleLineY); // middle horizontal
  line(leftLineX, 0, leftLineX, height); // left vertical
  line(rightLineX, middleLineY, rightLineX, height); // right vertical

  strokeWeight(15);
  line(rightLineX, bottomLineY, width, bottomLineY); // bottom horizontal

  strokeWeight(20);
  line(0, topLineY, leftLineX, topLineY); // top horizontal
}
