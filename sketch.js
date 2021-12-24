const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine
var snow=[]
var engine,world
function preload(){
  bg=loadImage("snow2.jpg")
}

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 for(var i=0;i<200;i++){
   snow.push(new createSnow(random(0,800),random(0,800)))
 }
}

function draw() {
  background(bg);  
  //drawSprites();
  Engine.update(engine) 
  for(var i=0;i<200;i++){
    snow[i].display()
  }
}