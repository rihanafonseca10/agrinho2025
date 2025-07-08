function setup() {
  createCanvas(400, 400);

  // draw the sky
  let skyBlue = random(100, 255);
  let skyGreen = random(skyBlue);
  let skyRed = random(skyGreen);
  background(skyRed, skyGreen, skyBlue);
  
  // draw the grass
  let grassGreen = random(100, 255);
  let grassBlue = random(grassGreen);
  let grassRed = random(grassBlue);
  fill(grassRed, grassGreen, grassBlue);
  noStroke();
  rect(0, height * .25, width, height * .75);
  
  frameRate(1);
}

function draw(){
  
  let flowerX = random(width);
  let flowerY = random(height * .3, height);
  let petalSize = random(10, 30);
  
  fill(random(255), random(255), random(255));
  
  circle(flowerX - petalSize / 2, flowerY - petalSize / 2, petalSize);
  circle(flowerX + petalSize / 2, flowerY - petalSize / 2, petalSize);
  circle(flowerX - petalSize / 2, flowerY + petalSize / 2, petalSize);
  circle(flowerX + petalSize / 2, flowerY + petalSize / 2, petalSize);
  
  fill(random(255), random(255), random(255));
  
  circle(flowerX, flowerY, petalSize);
}