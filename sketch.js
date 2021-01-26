const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var building;

function preload() {

}

function setup(){
    createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    
    building1 = new Building(400,300,160,100);
    building2 = new Building(400,400,180,100);
    building3 = new Building(400,500,200,100);
    building4 = new Building(400,200,140,100);

    ball =new Stone(600,50,30);

    slingShot = new SlingShot(ball.body,{x:600 , y:50});

    ground = new Ground(600,600,2000,10);
    
}

function draw(){
   background(0);

    Engine.update(engine);

    building1.display();
    building2.display();
    building3.display();
    building4.display();


    ground.display();
    ball.display();
    slingShot.display();
   

}
function mouseDragged(){
    //Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    slingShot.dragged();
}


/*function mouseReleased(){
    slingshot.fly();
}*/


  