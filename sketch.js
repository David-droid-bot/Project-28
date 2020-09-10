  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree,ground1;
var mango1,mango2,mango3,mango4,mango5;
var stone, m1,m2,m3;
var shoot1;
function preload()
{
	boy=loadImage("Plucking mangoes/boy.png")
	tree=loadImage("Plucking mangoes/tree.png")
	mango1=loadImage("Plucking mangoes/mango.png")
	mango2=loadImage("Plucking mangoes/mango.png")
	mango3=loadImage("Plucking mangoes/mango.png")
	mango4=loadImage("Plucking mangoes/mango.png")
	mango5=loadImage("Plucking mangoes/mango.png")
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boySprite=createSprite(100,600, 50,20);
	boySprite.addImage(boy)
	boySprite.scale=0.1

	treeSprite=createSprite(600,500, 50,20);
	treeSprite.addImage(tree)
	treeSprite.scale=0.3
	
	mango1Sprite=createSprite(600,400, 50,20);
	mango1Sprite.addImage(mango1)
	mango1Sprite.scale=0.1

	mango2Sprite=createSprite(690,450, 50,20);
	mango2Sprite.addImage(mango2)
	mango2Sprite.scale=0.1

	mango3Sprite=createSprite(500,400, 50,20);
	mango3Sprite.addImage(mango3)
	mango3Sprite.scale=0.1

	mango4Sprite=createSprite(490,470, 50,20);
	mango4Sprite.addImage(mango4)
	mango4Sprite.scale=0.1

	mango5Sprite=createSprite(750,500, 50,20);
	mango5Sprite.addImage(mango5)
	mango5Sprite.scale=0.1

	m1 =new Mango(600,500,60);
	m2 =new Mango(600,400,60);
	m3 =new Mango(690,450,60);
	m4 =new Mango(490,470,60);
	ground1 = new Ground(400,690,800,20);
	stone=new Stone(50,550);
	shoot1=new Shoot(stone.body,{x:50,y:550})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(192,192,192);
  Engine.update(engine);
  ground1.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  shoot1.display();


  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);




  drawSprites();
                                             
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    shoot1.fly();
}
function detectCollision(s,m){
	stonebody=s.body.position;
	mangobody=m.body.position;
	var distance=dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);
	if(distance<=50+m.r){
		Matter.Body.setStatic(m.body,false);
	}
}

