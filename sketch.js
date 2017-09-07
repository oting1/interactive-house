function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(172, 229, 249);
  fill(237, 231, 213);
  noStroke()
  rect(0,350,400,50);
  fill(255, 147, 7);
  rect(125,200,150,150);
  fill(255, 205, 7);
  noStroke()
  rect(135,115,30,60);
  rect(200,250,50,100);
  triangle(100, 200, 300, 200, 200, 100);
  fill(244, 251, 252);
  noStroke()
  ellipse(135,90,20,20);
  ellipse(175,60,35,35);
  ellipse(250,60,60,60);
  
}