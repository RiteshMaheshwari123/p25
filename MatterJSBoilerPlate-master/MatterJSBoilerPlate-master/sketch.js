
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper
var ground
var bottomBox, leftBox,rightBox;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400,690,800,10);
	ground.shapeColor = "yellow";

	bottomBox = createSprite(500, 680, 100,10);
	bottomBox.shapeColor = "white";

	leftBox = createSprite(450, 660, 10,50);
	leftBox.shapeColor = "white";

	rightBox = createSprite(550, 660, 10,50);
	rightBox.shapeColor = "white";

	//Create the Bodies Here.
	paper = new Paper(160,600);

ground = Bodies.rectangle(400, 690, 800, 20, {isStatic:true} );
 	World.add(world, ground);

	 bottomBox = Bodies.rectangle(400, 650, 200,20, {isStatic:true});
	World.add(world, bottomBox);

	leftBox = Bodies.rectangle(400, 650, 200,20, {isStatic:true});
	World.add(world, bottomBox);

	rightBox = Bodies.rectangle(400, 650, 200,20, {isStatic:true});
	World.add(world, bottomBox);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}

