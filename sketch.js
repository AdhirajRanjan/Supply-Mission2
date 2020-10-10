var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

	boxSprite1=createSprite(width/2,650,200,20);
	boxSprite1.shapeColor=color(255,0,0);

	boxSprite2=createSprite(300,610,20,100);
	boxSprite2.shapeColor=color(255,0,0);

	boxSprite3=createSprite(500,610,20,100);
	boxSprite3.shapeColor=color(255,0,0);


	engine = Engine.create();
	world = engine.world;

	boxBody1 = Bodies.rectangle(width/2,650,200,20, {isStatic:true});
	boxBody2 = Bodies.rectangle(300,610,20,100, {isStatic:true});
	boxBody3 = Bodies.rectangle(500,610,20,100, {isStatic:true});

	World.add(world,boxBody1);
	World.add(world,boxBody2);
	World.add(world,boxBody3);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boxSprite1.x=boxBody1.position.x
  boxSprite1.y=boxBody1.position.y
  
  boxSprite2.x=boxBody2.position.x
  boxSprite2.y=boxBody2.position.y

  boxSprite3.x=boxBody3.position.x
  boxSprite3.y=boxBody3.position.y
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



