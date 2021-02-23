const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var slingShot;
var score = 0;
var level = 1;
var Mbottle;

//Level fire?????????????????????????????????????

function preload() {
    
    backgroundImg=loadImage("Background L1.jpg");
    
}

function setup(){
    canvas = createCanvas(1500,880);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height-10,width,20);

    base1 = new Ground(1050,600,600,20);
    //base2 = new Ground(980,300,400,20);

    level1 = new Level1();

    Mbottle = new Bird(200,250);

    slingshot = new SlingShot(Mbottle.body,{x:200, y:250});

}

function draw(){
    Engine.update(engine);
    background(backgroundImg);
     
    text(mouseX+","+mouseY,mouseX,mouseY);
    textSize(20);
    strokeWeight(4);
    noStroke();
    fill("white");
    text("Score: " + score,80,50);
    text("Press space to get one more chance.", 80,80);

    strokeWeight(0);
    ground.display();
    base1.display();
    //base2.display();
    slingshot.display();
   
    if(level === 1){ 
        textSize(32);
        fill("white");
        stroke("blue");
        strokeWeight(4);
        text("Replace platic bottles with a reusable bottle...",500,200);
        level1.display();
        level1.score();

        if(score>500){
            level++;
            level1.destroy();
            level1 = new Level2();
        }
    }
        else if(level === 2){
        Bird.image = loadImage("Cloth Bag.png"); 
        Bird.width = 200;
        Bird.height = 180;  
        backgroundImg = loadImage("BG L2.jpg");
        level1.display();
        Mbottle.display();
        level1.score();
        textSize(32);
        fill("white");
        stroke("blue");
        strokeWeight(4);
        text("Replace platic bags with a reusable Cloth Bag...",500,200);
    }

    Mbottle.display();  

     
}

function mouseDragged(){
    Matter.Body.setPosition(Mbottle.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(Mbottle.body, {x: 200 , y: 250});
        slingshot.attach(Mbottle.body);
    }
}