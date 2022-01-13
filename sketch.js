
 const Engine = Matter.Engine;
const World = Matter.World;
 
 const Bodies = Matter.Bodies;
  var snow=[]

function preload (){

  snowimg=loadImage("snow2.jpg")
  snow2img=loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for (var i=0;i<500;i++){
    snow.push(new Snow(random(1,width),random(1,height)))
  }
 
}


function draw() {
  background(snowimg);  
  Engine.update(engine)
  for (var i=0;i<snow.length;i++){
    snow[i].display()
    snow[i].update()
  }
}