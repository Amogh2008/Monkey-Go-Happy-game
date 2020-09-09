
var monkey;

function preload(){
monkey = loadAnimation("Monkey_01","Monkey_02","Monkey_03","Monkey_04","Monkey_05","Monkey_06","Monkey_07","Monkey_08","Monkey_09","Monkey_10")
 
}



function setup() {
  createCanvas(400, 400);
  
 monkey = creatSprite(10,10,20,20);
 monkey.addAnimation("monkey");
 
  
}

function draw() {
  background(220);
  
  if(keyDown("space")){
     monkey.velocityX = 10;
     
     }
  
  
  
  
  drawSprites();
}