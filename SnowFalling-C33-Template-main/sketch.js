const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Constarint  = Matter.Constarint

var snow1,snow2,bg
var engine,world
var ice = []
var maxSnow = 100
function preload(){
  bg = loadImage("snow2.jpg");
  runnerImg = loadImage("girl.png")
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  
  runner = createSprite(2,500)
  runner.addImage("runner",runnerImg)
  //runner.scale
  runner.velocityX = 2
  if(frameCount %25 === 0){
    for(var i = 0; i<maxSnow; i++){
      ice.push(new Snow(random(0,1350),random(0,50)))
    }
  }
}

function draw() {
  
  background(bg);  
  Engine.update(engine)

  if(runner.x>1200){
    runner.x =150;

  }
  for(var i = 0; i<maxSnow; i++){
    ice[i].display();
  }
  drawSprites();
}