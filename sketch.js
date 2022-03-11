var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(120,200,46,89);
}

function draw() 
{
  background("lightblue");
  if(keyIsDown(LEFT_ARROW)){
    box.position.x -= 3;
  };
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x += 3;
  };
  if(keyIsDown(UP_ARROW)){
    box.position.y -= 3;
  };
  if(keyIsDown(DOWN_ARROW)){
    box.position.y += 3;
  };
  drawSprites();
}




