
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var right;
var left;
var score= 0;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground= new Ground(width/2,520,width,10)
 left = new Ground(1050,475,9,90)
 right = new Ground(1200,475,9,90)

 var ball_options={
   isStatic: false,
	restitution: 0.5,
	friction: 0,
	density:1.2
	}
ball = Bodies.circle(200,100,15,ball_options);
World.add(world,ball)


rectMode(CENTER);
ellipseMode(RADIUS);
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  var pos = ball.position
ellipse(pos.x,pos.y,12)
  ground.show()
  left.show()
  right.show()
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
if(keyCode === RIGHT_ARROW){

hforce()
}
}

function hforce(){
Matter.Body.applyForce(ball,{x:0 , y:0},{x:0.8, y:0})
}
function vforce(){
Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:-0.3})
}