
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime,score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0
  score = 0;

}


function draw() {
  background(255);
  
 
  
  
if(ground.x<0){
  ground.x = ground.width/2;
}
if(keyDown("space")){
  monkey.velocityY = -12 
}  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
   stroke("black")
  textSize(20);
  fill("black");
  text("Score: "+ score, 100,100)
  
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100,50)
  
  drawSprites(); 
  

  
  
}

function spawnFood(){
if(frameCount%80===0){
  banana = createSprite(600,250,40,10);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(120,200));
  banana.velocityX = -7;
  banana.scale = 0.1;
  banana.lifetime = 200;
  foodGroup.add(banana);
}
}

function spawnObstacles(){
if(frameCount%300===0){
  obstacle = createSprite(250,330,40,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1    
  obstacle.velocityX = -5; 
  obstacle.lifetime = 300;
  obstacleGroup.add(obstacle);
}
}





