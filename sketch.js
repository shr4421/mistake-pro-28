
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var ground;
var boy,boyImg;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone,slingShot;

function preload(){
	
	boyImg=loadImage("Plucking mangoes/boy.png");

}

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
  world = engine.world;
  


  tree= new Tree (900,200,400,400);

  mango1= new Mango (800,200,50);
  mango2= new Mango (900,100,50);
  mango3= new Mango (1000,50,50);
  mango4= new Mango (1070,80,50);
  mango5= new Mango (890,140,50);
  mango6= new Mango (930,170,50);
  mango7= new Mango (950,200,50);

  stone= new Rock(600,200,90);



  
  ground= new Ground (600,390,1200,20);

  slingShot=new SlingShot(stone.body,{x:250,y:280});

  boy=createSprite(300,330,100,100);
  boy.addImage(boyImg)
  boy.scale=0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  slingShot.display();
  
  

 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 detectcollision(stone,mango6);
 detectcollision(stone,mango7);

  drawSprites();
 
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased (){

slingShot.fly();

}

function detectcollision(rock1,mango1){
 
  MangoBodyPosition=mango1.body.position;
  RockBodyPosition=rock1.body.position;

  var distance=dist(RockBodyPosition.x,RockBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y);
  if(distance<=mango1.r+rock1.r){
    Matter.Body.setStatic(mango1.body,false);
  }


}

function keyPressed(){

  if(keyCode === 32){

    Matter.Body.setPosition(stone.body,{x:250,y:280});
    slingShot.attach(stone.body);

  }


}

