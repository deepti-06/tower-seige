const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hex;
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
    stand1 = new Ground(300, height-300, 300, 50);
    stand2 = new Ground(900, height-300, 300, 50);

    box1 = new Ground(750, height- 350,40,70);
    box2 = new Ground(790, height- 350,40,70);
    box3 = new Ground(830, height- 350,40,70);
    box4 = new Ground(870, height- 350,40,70);
    box5 = new Ground(910, height- 350,40,70);
    box6 = new Ground(950, height- 350,40,70);
    box7 = new Ground(990, height- 350,40,70);
    box8 = new Ground(1030, height- 350,40,70);

    box9 = new Ground(150, height- 350,40,70);
    box10 = new Ground(190, height- 350,40,70);
    box11 = new Ground(230, height- 350,40,70);
    box12 = new Ground(270, height- 350,40,70);
    box13 = new Ground(310, height- 350,40,70);
    box14 = new Ground(350, height- 350,40,70);
    box15 = new Ground(390, height- 350,40,70);
    box16 = new Ground(430, height- 350,40,70);

   
    
   
    
  

    
    hex = new Hex(100,100);
    slingshot = new SlingShot(hex.body, { x:200, y: 100})
    //log6 = new Log(230,180,80, PI/2);
    //chain = new Chain(bird.body,log6.body);
}
function mouseDragged(){
Matter.Body.setPosition(hex.body, {x: mouseX, y: mouseY})

}
function mouseReleased(){
    slingshot.fly();
}

function draw(){
    background(backgroundImg);
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

    hex.display();
    slingshot.display();
    
  //  log6.display();
  //  chain.display();    
}
