var fairy,star,fairyImage,starImage,night,nightImage;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



function preload()
{
   //preload the images here
fairyImage=loadImage("images/fairy2.png");
starImage=loadImage("images/star.png");
nightImage=loadImage("images/starnight.png");


}

function setup() {
  createCanvas(1000, 900);
  night=createSprite(200,20)
  night.addImage("night",nightImage);
  night.scale=1;

  fairy=createSprite(200,600)
  fairy.addImage("fairy",fairyImage)
  fairy.scale=0.3;
  
  star=createSprite(750,50)
  star.addImage("star",starImage);
  star.scale=0.5
  engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
  Engine.run(engine);
  
}


function draw() {
//star.x=starBody.position.x
//star.y=starBody.position.yx
star.x= starBody.position.x 
  star.y= starBody.position.y

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }
  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 10;
}

 if(keyDown("left")){
    fairy.x = fairy.x - 10;
}

if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(starBody,false); 
}
  drawSprites();
  keyPressed();
}

function keyPressed() {

	
}