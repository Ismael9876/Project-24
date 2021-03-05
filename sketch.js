const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject
var world;


function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);
  
  
  engine = Engine.create();
  world = engine.world;
  dustbinObj=new dustbin(1200,650);
  paperObject=new paper(200,450,40);
  groundObject=new ground(width/2,670,20);
	


  
Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  ellipse(130, 645, 55, 55);
  
 drawSprites();
}

function Pressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

}
