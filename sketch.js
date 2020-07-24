var player;
var obstacle, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9
var bg
var playerimg
var rand 
var purity = 10


function preload() {
  playerimg = loadImage("drop.jpg"); 
  bacimg = loadImage("bac2.jpg");
  chemimg = loadImage("chem.jpg");
  sewimg = loadImage("sewage.png");
  bgimg = loadImage("water stream.png");
}
function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200,800,400);
  bg.addImage("bgimg", bgimg);
  player = createSprite(400, 200, 50, 50);
  player.addImage("playerimg", playerimg);
  player.scale = 0.20;
  obstacle = createSprite(random(100, 650), 10, 20,20);
  obstacle.addImage("bac2",bacimg);
  obstacle.scale = 0.1;
  obstacle.velocityY = random(1,5);
  obstacle2 = createSprite(random(100, 650), 10, 20,20);
  obstacle2.scale = 0.1;
  obstacle2.addImage("bac2",bacimg);
  obstacle2.velocityY = random(1,5);
  obstacle3 = createSprite(random(100, 650), 10, 20,20);
  obstacle3.addImage("bac2",bacimg);
  obstacle3.scale = 0.1;
  obstacle3.velocityY = random(1,5);
  obstacle4 = createSprite(random(100, 650), 10, 20,20);
  obstacle4.addImage("chem",chemimg);
  obstacle4.scale = 0.05;
  obstacle4.velocityY = random(1,5);
  obstacle5 = createSprite(random(100, 650), 10, 20,20);
  obstacle5.addImage("chem",chemimg);
  obstacle5.scale = 0.05;
  obstacle5.velocityY = random(1,5);
  obstacle6 = createSprite(random(100, 650), 10, 20,20);
  obstacle6.addImage("chem",chemimg);
  obstacle6.scale = 0.05;
  obstacle6.velocityY = random(1,5);
  obstacle7 = createSprite(random(100, 650), 10, 20,20);
  obstacle7.addImage("sewage",sewimg);
  obstacle7.scale = 0.05;
  obstacle7.velocityY = random(1,5);
  obstacle8 = createSprite(random(100, 650), 10, 20,20);
  obstacle8.addImage("sewage",sewimg);
  obstacle8.scale = 0.05;
  obstacle8.velocityY = random(1,5);
  obstacle9 = createSprite(random(100, 650), 10, 20,20);
  obstacle9.addImage("sewage",sewimg);
  obstacle9.scale = 0.05;
  obstacle9.velocityY = random(1,5);
 

}


function draw() {
  
  

  background(bgimg);  
  
  bg.velocityY = 1;
  if(bg.y > 290){
    bg.y = 210;
  }
  
  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0;
  }
  if(keyDown(LEFT_ARROW)){
    player.velocityX = -5;
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0;
  }
  if(player.x >= 650){
    player.velocityX = -5;
  }
  if(player.x <= 100){
    player.velocityX = 5;
  } 
  if(obstacle.y > 400){
    obstacle.y = 0;
    obstacle.velocityY = random(1,5);

  }
  if(obstacle2.y > 400){
    obstacle2.y = 0;
    obstacle2.velocityY = random(1,5);
  }
  if(obstacle3.y > 400){
    obstacle3.y = 0;
    obstacle3.velocityY = random(1,5);
  }
  if(obstacle4.y > 400){
    obstacle4.y = 0;
    obstacle4.velocityY = random(1,5);
  }
  if(obstacle5.y > 400){
    obstacle5.y = 0;
    obstacle5.velocityY = random(1,5);
  }
  if(obstacle6.y > 400){
    obstacle6.y = 0;
    obstacle6.velocityY = random(1,5);
  }  
  if(obstacle7.y > 400){
    obstacle7.y = 0;
    obstacle7.velocityY = random(1,5);
  }
  if(obstacle8.y > 400){
    obstacle8.y = 0;
    obstacle8.velocityY = random(1,5);
  }
  if(obstacle9.y > 400){
    obstacle9.y = 0;
    obstacle9.velocityY = random(1,5);
  }
  if(player.isTouching(obstacle)||player.isTouching(obstacle2)||player.isTouching(obstacle3)||player.isTouching(obstacle4)||player.isTouching(obstacle5)||player.isTouching(obstacle6)||player.isTouching(obstacle7)||player.isTouching(obstacle8)||player.isTouching(obstacle9)){
    purity = purity - 1;
    obstacle.y = 10;
    obstacle.velocityY = random(1,5);
    obstacle2.y = 10;
    obstacle2.velocityY = random(1,5);
    obstacle3.y = 10;
    obstacle3.velocityY = random(1,5);
    obstacle4.y = 10;
    obstacle4.velocityY = random(1,5);
    obstacle5.y = 10;
    obstacle5.velocityY = random(1,5);
    obstacle6.y = 10;
    obstacle6.velocityY = random(1,5);
    obstacle7.y = 10;
    obstacle7.velocityY = random(1,5);
    obstacle8.y = 10;
    obstacle8.velocityY = random(1,5);
    obstacle9.y = 10;
    obstacle9.velocityY = random(1,5);
  }


  text(purity, 700, 10); 

  drawSprites();
  if(purity <= 0){
    text("You are impure. This is how most of the water in the world is getting contaminated and people are not able to access it. I hope this game is successful in spreading awareness to save water.", 400,200);
    obstacle.velocityY = 0;
    obstacle2.velocityY = 0;
    obstacle3.velocityY = 0;
    obstacle4.velocityY = 0;
    obstacle5.velocityY = 0;
    obstacle6.velocityY = 0;
    obstacle7.velocityY = 0;
    obstacle8.velocityY = 0;
    obstacle9.velocityY = 0;
    purity = 0;
    player.velocityx = 0;
  }  
}


































