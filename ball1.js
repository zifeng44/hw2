function setup() {
  createCanvas(400, 400);
}

var y = 10;

function draw() {
  background(220);

  ellipse(200, y, 40);

  y = y + 3;

  if (y > height) {
    y = 10;
  }
}
