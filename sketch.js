const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hex1;
var backgroundImg,platform;
var slingShot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(300, height-100, 300, 50);
    stand2 = new Ground(900, height-100, 300, 50);

    box1 = new Blocks(750, height- 150,40,70);
    box2 = new Blocks(790, height- 150,40,70);
    box3 = new Blocks(830, height- 150,40,70);
    box4 = new Blocks(870, height- 150,40,70);
    box5 = new Blocks(910, height- 150,40,70);
    box6 = new Blocks(950, height- 150,40,70);
    box7 = new Blocks(990, height- 150,40,70);
    box8 = new Blocks(1030, height- 150,40,70);

    box9 = new Blocks(150, height- 150,40,70);
    box10 = new Blocks(190, height- 150,40,70);
    box11 = new Blocks(230, height- 150,40,70);
    box12 = new Blocks(270, height- 150,40,70);
    box13 = new Blocks(310, height- 150,40,70);
    box14 = new Blocks(350, height- 150,40,70);
    box15 = new Blocks(390, height- 150,40,70);
    box16 = new Blocks(430, height- 150,40,70);

   
    
   
    
  

    
    hex1 = new Hex(100,100);
    slingshot = new SlingShot(hex1.body, { x:200, y: 100})
    //log6 = new Log(230,180,80, PI/2);
    //chain = new Chain(bird.body,log6.body);
}
function mouseDragged(){
Matter.Body.setPosition(hex1.body, {x: mouseX, y: mouseY})

}
function mouseReleased(){
    slingshot.fly();
}

function draw(){
    background ("white")
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
  
    stand1.display();
    stand2.display();

    box3.display();
    box4.display();
  

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    hex1.display();
    slingshot.display();
    
  //  log6.display();
  //  chain.display();    
}

