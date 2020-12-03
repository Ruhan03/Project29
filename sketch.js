
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling;
var stone;
var ground, ground1,ground2,angle;
function preload()
{
	
	

}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone= new Stone(150,400,15);
	slingshot = new SlingShot(stone.body,{x:150,y:400});
	ground = new Ground(750,690,1500,20);
  ground1 = new Ground(550,500,380,20);
  ground2 = new Ground(1030,300,360,20);

  block1 = new Blocks(420,400);
  block2 = new Blocks(470,400);
  block3 = new Blocks(520,400);
  block4 = new Blocks(570,400);
  block5 = new Blocks(620,400);
  block6 = new Blocks(670,400);

  block7 = new Blocks(450,350);
  block8 = new Blocks(500,350);
  block9 = new Blocks(550,350);
  block10 = new Blocks(600,350);
  block11 = new Blocks(650,350);

  block12 = new Blocks(600,300);
  block13 = new Blocks(550,300);
  block14 = new Blocks(500,300);

  block15 = new Blocks(550,250);

  block16 = new Blocks(900,250);
  block21 = new Blocks(950,250);
  block17 = new Blocks(1000,250);
  block18 = new Blocks(1050,250);
  block19 = new Blocks(1100,250);
  block20 = new Blocks(1150,250);

  block22 = new Blocks(950,200);
  block23 = new Blocks(1000,200);
  block24 = new Blocks(1050,200);
  block25 = new Blocks(1100,200);
  
  block26 = new Blocks(1000,150);
  block27 = new Blocks(1050,150);

  block28 = new Blocks(1025,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  stone.display();
  slingshot.display();
  ground.display();
  ground1.display();
  ground2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();


  block16.display();
}


function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(stone.body);
    }
}


function collide(object1,object2){
 
	 if(object2.body.position.x - object1.body.position.x <= object1.width/2 + object2.width/2){
		 Matter.Body.setStatic(object2.body, false)
	 }

 
 }