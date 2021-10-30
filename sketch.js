var rect1, rect2;



function setup() {
  createCanvas(1200,800);
  rect1 = createSprite (200,200,80,80);
  rect1.shapeColor = ("green");
  rect1.debug=true;
  rect2 = createSprite (400,200,80,80);
  rect2.shapeColor = ("green");
  rect2.debug=true;
}

function draw() {
  background(255,255,255);  
  rect1.x= World.mouseX;
  rect1.y= World.mouseY;
 console.log(rect1.x-rect2.x);
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2 && rect2.x - rect1.x < rect2.width/2 + rect1.width/2 && 
    rect1.y - rect2.y < rect2.height/2 + rect1.height/2 && rect2.y - rect1.y < rect2.width/2 + rect1.width/2   ){
    rect1.shapeColor ="red";
    rect2.shapeColor="red";
  }
  else {
    rect1.shapeColor = ("green");
    rect2.shapeColor = ("green");
  }
  drawSprites();
}