var r,g,b;

function setup() { 
  createCanvas(400, 400);
  r=random(255);
  g=random(255);
  b=random(255);
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
  fill(r, g, b);
  noStroke()
  ellipse(135,90,20,20);
  fill(r+10, g+100, b+100);
  ellipse(175,60,35,35);
  fill(r+20, g+150, b+250);
  ellipse(250,60,60,60);
}

function mousePressed() {
  var d = dist(mouseX,mouseY,135,90);
  if (d<10) 
  {
     r=random(255);
     g=random(255);
     b=random(255);
  }
  var d = dist(mouseX,mouseY,175,60);
  if (d<18)
    {
     r=random(255);
     g=random(255);
     b=random(255);
  }
    var d = dist(mouseX,mouseY,250,60);
  if (d<30)
    {
     r=random(255);
     g=random(255);
     b=random(255);
  }

}
