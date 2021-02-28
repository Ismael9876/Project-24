var wall1;
var wall2;
var wall3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

  
  
  wall1 = createSprite(780, 600, 20, 110);
  wall2 = createSprite(680, 645, 190, 20);
  wall3 = createSprite(590, 600, 20, 110);
  
	engine = Engine.create();
	world = engine.world;

  var option = {
    isStatic: false,
    restitution: 3.0,
    friction: 0.5,
    dencity: 1.2,

  }


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(130, 645, 55, 55);
  
  wall1.shapeColor = ("white");
  wall2.shapeColor = ("white");
  wall3.shapeColor = ("white");
  
  

  drawSprites();
 
}

function Pressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

}
