var bgimg,bg
var naruto,narutoimg
var ground
var sasori,sasoriimg

function preload(){
bgimg = loadAnimation("bg.gif");
narutoimg = loadAnimation("naruto.gif");
sasoriimg = loadAnimation("sasori.gif");
}

function setup(){
  createCanvas(1100,600)
  bg = createSprite(550,300,1100,600);
  bg.addAnimation("moving", bgimg)
  bg.scale = 1.15;

  naruto = createSprite(85,370,10,10)
  naruto.addAnimation("running", narutoimg)
  naruto.scale = 0.45;

  ground = createSprite(550,485,1100,10);
  ground.visible = false;
}

function draw(){
 background("cyan");
 console.log(naruto.y);


 if (keyDown(UP_ARROW)&& naruto.y > 200){
    naruto.velocityY = -10;
 }
 naruto.velocityY = naruto.velocityY + .8;

 naruto.collide(ground);
 
 spawnObstacles();
 drawSprites();
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}

function spawnObstacles (){
  if (frameCount%250 === 0){
    sasori = createSprite(1022,401,10,10);
    sasori.addAnimation("attacking", sasoriimg);
    sasori.velocityX = -3;
    sasori.scale = 1.8;
  }
}