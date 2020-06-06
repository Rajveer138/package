var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;

//Create  box using 3 sprite objects such that it looks box.Left edge sprite,bottom edge sprite and right edge sprite
//sprite 1 i have shown create other sprites accordingly
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
	 
	 boxleftSprite2=createSprite(360, 650, 100,20);
	 boxleftSprite2.shapeColor=color(255,0,0);
	 
	 boxleftSprite3=createSprite(420, boxY, 20,100);
	 boxleftSprite3.shapeColor=color(255,0,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
packageSprite.display();
packageSprite.collide(boxleftSprite3);
packageSprite.collide(boxleftSprite2);
packageSprite.collide(boxleftSprite);




  
  drawSprites();
  
  
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)
//similar thing do for right arrow.we cannot change the x and y position of physics engine body as we do for sprite.So we shift the origin using translate

  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



