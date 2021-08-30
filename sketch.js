var frect , mrect;

function setup() {
  createCanvas(800,400);
 frect = createSprite(200, 200, 50, 80);
 frect.shapeColor = "cyan";

 mrect = createSprite(400, 200, 80, 50);
 mrect.shapeColor = "cyan";
}

function draw() {
  background("red");
  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;

  console.log(mrect.x - frect.x);

  if(mrect.x-frect.x < (frect.width/2+mrect.width/2) && mrect.x-frect.x > -(frect.width/2+mrect.width/2)&&
  mrect.y-frect.y < (frect.height/2+mrect.height/2) && mrect.y-frect.y > -(frect.height/2+mrect.height/2)){
    mrect.shapeColor = "orange";
    frect.shapeColor = "orange";
  }else{
    mrect.shapeColor = "cyan";
    frect.shapeColor = "cyan";
  }

  drawSprites();
}