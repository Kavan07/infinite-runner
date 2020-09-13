function preload() {
  boyIMG = loadImage("runner.png");
}

function setup() {
sprite1 = createSprite(50, 250, 50, 50);
sprite1.addImage(boyIMG);

sprite2 = createSprite(200, 350, 400, 100);
sprite2.shapeColor = "orange";

sprite3 = createSprite(1000, 250, 300, 30);
sprite3.velocityX = -10;
sprite3.shapeColor = "yellow";

sprite4 = createSprite(1500, 200, 300, 30);
sprite4.velocityX = -10;
sprite4.shapeColor = "yellow";

sprite5 = createSprite(2000, 150, 300, 30);
sprite5.velocityX = -10;
sprite5.shapeColor = "yellow";

sprite6 = createSprite(2500, 200, 300, 30);
sprite6.velocityX = -10;
sprite6.shapeColor = "yellow";

sprite7 = createSprite(3000, 300, 300, 30);
sprite7.velocityX = -10;
sprite7.shapeColor = "yellow";

sprite8 = createSprite(3500, 150, 300, 30);
sprite8.velocityX = -10;
sprite8.shapeColor = "yellow";

sprite9 = createSprite(4000, 140, 300, 30);
sprite9.velocityX = -10;
sprite9.shapeColor = "yellow";

sprite10 = createSprite(4500, 210, 300, 30);
sprite10.velocityX = -10;
sprite10.shapeColor = "yellow";

sprite11 = createSprite(5000, 280, 300, 30);
sprite11.velocityX = -10;
sprite11.shapeColor = "yellow";

sprite12 = createSprite(5500, 200, 300, 30);
sprite12.velocityX = -10;
sprite12.shapeColor = "yellow";

sprite13 = createSprite(6000, 30, 300, 30);
sprite13.velocityX = -10;
sprite13.shapeColor = "yellow";

sprite14 = createSprite(6500, 250, 300, 30);
sprite14.velocityX = -10;
sprite14.shapeColor = "yellow";

sprite15 = createSprite(7000, 200, 300, 30);
sprite15.velocityX = -10;
sprite15.shapeColor = "yellow";

sprite16 = createSprite(7500, 250, 300, 30);
sprite16.velocityX = -10;
sprite16.shapeColor = "yellow";

sprite17 = createSprite(8000, 200, 300, 30);
sprite17.velocityX = -10;
sprite17.shapeColor = "yellow";

sprite18 = createSprite(8500, 150, 300, 30);
sprite18.velocityX = -10;
sprite18.shapeColor = "yellow";

sprite19 = createSprite(9000, 200, 300, 30);
sprite19.velocityX = -10;
sprite19.shapeColor = "yellow";

sprite20 = createSprite(9500, 300, 300, 30);
sprite20.velocityX = -10;
sprite20.shapeColor = "yellow";

sprite21 = createSprite(10000, 150, 300, 30);
sprite21.velocityX = -10;
sprite21.shapeColor = "yellow";

sprite22 = createSprite(10500, 140, 300, 30);
sprite22.velocityX = -10;
sprite22.shapeColor = "yellow";

sprite23 = createSprite(11000, 210, 300, 30);
sprite23.velocityX = -10;
sprite23.shapeColor = "yellow";

sprite24 = createSprite(11500, 280, 300, 30);
sprite24.velocityX = -10;
sprite24.shapeColor = "yellow";

sprite25 = createSprite(12000, 200, 300, 30);
sprite25.velocityX = -10;
sprite25.shapeColor = "yellow";

sprite26 = createSprite(12500, 300, 300, 30);
sprite26.velocityX = -10;
sprite26.shapeColor = "yellow";

sprite27 = createSprite(13000, 250, 300, 30);
sprite27.velocityX = -10;
sprite27.shapeColor = "yellow";

sprite28 = createSprite(13500, 200, 300, 30);
sprite28.velocityX = -10;
sprite28.shapeColor = "yellow";

sprite29 = createSprite(14000, 300, 300, 30);
sprite29.velocityX = -10;
sprite29.shapeColor = "yellow";

sprite30 = createSprite(14500, 150, 300, 30);
sprite30.velocityX = -10;
sprite30.shapeColor = "yellow";
}

function draw() {
  background("white");
  createEdgeSprites();
  if (keyDown("UP_ARROW")) {
    sprite1.y = sprite1.y - 10;
  }
  if (keyDown("DOWN_ARROW")) {
    sprite1.y = sprite1.y + 10;
  }
  
  sprite1.bounceOff(sprite2);
  sprite1.bounceOff(sprite3);
  sprite1.bounceOff(sprite4);
  sprite1.bounceOff(sprite5);
  sprite1.bounceOff(sprite6);
  sprite1.bounceOff(sprite7);
  sprite1.bounceOff(sprite8);
  sprite1.bounceOff(sprite9);
  sprite1.bounceOff(sprite10);
  sprite1.bounceOff(sprite11);
  sprite1.bounceOff(sprite12);
  sprite1.bounceOff(sprite13);
  sprite1.bounceOff(sprite14);
  sprite1.bounceOff(sprite15);
  sprite1.bounceOff(sprite16);
  sprite1.bounceOff(sprite17);
  sprite1.bounceOff(sprite18);
  sprite1.bounceOff(sprite19);
  sprite1.bounceOff(sprite20);
  sprite1.bounceOff(sprite21);
  sprite1.bounceOff(sprite22);
  sprite1.bounceOff(sprite23);
  sprite1.bounceOff(sprite24);
  sprite1.bounceOff(sprite25);
  sprite1.bounceOff(sprite26);
  sprite1.bounceOff(sprite27);
  sprite1.bounceOff(sprite28);
  sprite1.bounceOff(sprite29);
  sprite1.bounceOff(sprite30);
drawSprites();

if (sprite1.x < 0) {
  sprite2.velocityX = 0;
  sprite3.velocityX = 0;
  sprite4.velocityX = 0;
  sprite5.velocityX = 0;
  sprite6.velocityX = 0;
  sprite7.velocityX = 0;
  sprite8.velocityX = 0;
  sprite9.velocityX = 0;
  sprite10.velocityX = 0;
  sprite11.velocityX = 0;
  sprite12.velocityX = 0;
  sprite13.velocityX = 0;
  sprite14.velocityX = 0;
  sprite15.velocityX = 0;
  sprite16.velocityX = 0;
  sprite17.velocityX = 0;
  sprite18.velocityX = 0;
  sprite19.velocityX = 0;
  sprite20.velocityX = 0;
  sprite21.velocityX = 0;
  sprite22.velocityX = 0;
  sprite23.velocityX = 0;
  sprite24.velocityX = 0;
  sprite25.velocityX = 0;
  sprite26.velocityX = 0;
  sprite27.velocityX = 0;
  sprite28.velocityX = 0;
  sprite29.velocityX = 0;
  sprite30.velocityX = 0;  
  fill("black");
  textSize(26);
  text("YOU LOST", 150, 150);
  text("press spacebar to reset the game", 10, 250);
  //to reset the objects to play again.
}

  if ((sprite30.x < 0) && (sprite1.x > 0)) {
  textSize(26);
  fill("black");
  text("YOU WIN", 150, 150);
  text("press spacebar to reset the game", 10, 250);
  //to reset the objects to play again.
}
  reset();
  //adding gravity
  sprite1.y = sprite1.y + 3;
}

  
function reset (){
  
  //logic of this function.
if (keyDown("space")) {
sprite1.y = 250;
sprite1.x = 50;
sprite3.y = 250;
sprite3.x = 1000;  
sprite4.y = 200;
sprite4.x = 1500;
sprite5.y = 150;
sprite5.x = 2000;  
sprite6.y = 200;
sprite6.x = 2500;  
sprite7.y = 300;
sprite7.x = 3000;  
sprite8.y = 150;
sprite8.x = 3500;  
sprite9.y = 140;
sprite9.x  = 4000;  
sprite10.y = 210;
sprite10.x = 4500;
sprite11.y = 280;
sprite11.x = 5000;
sprite12.y = 200;
sprite12.x = 5500;
sprite13.y = 30;  
sprite14.x = 6000;
sprite14.y = 250;
sprite15.x = 6500;
sprite15.y = 200;  
sprite16.x = 7000;
sprite16.y = 250;  
sprite17.x = 7500;
sprite17.y = 200;  
sprite18.x = 8000;
sprite18.y = 150;  
sprite19.x = 8500;
sprite19.y = 200;  
sprite20.x = 9000;
sprite20.y = 300;
sprite21.x = 9500;
sprite21.y = 150;
sprite22.x = 10000;
sprite22.y = 140;
sprite23.x = 10500;  
sprite23.y = 210;
sprite24.x = 11000;
sprite24.y = 280;
sprite25.x = 11500;  
sprite25.y = 200;
sprite26.x = 12000;  
sprite26.y = 300;
sprite27.x = 12500;  
sprite27.y = 250;
sprite28.x = 13000;  
sprite28.y = 200;
sprite29.x = 13500;  
sprite29.y = 300;
sprite30.x = 14000;
sprite30.y = 150;
sprite1.velocityX = 0;
sprite3.velocityX = -10;
sprite4.velocityX = -10;
sprite5.velocityX = -10;
sprite6.velocityX = -10;
sprite7.velocityX = -10;
sprite8.velocityX = -10;
sprite9.velocityX = -10;
sprite10.velocityX = -10;
sprite11.velocityX = -10;
sprite12.velocityX = -10;
sprite13.velocityX = -10;
sprite14.velocityX = -10;
sprite15.velocityX = -10;
sprite16.velocityX = -10;
sprite17.velocityX = -10;
sprite18.velocityX = -10;
sprite19.velocityX = -10;
sprite20.velocityX = -10;
sprite21.velocityX = -10;
sprite22.velocityX = -10;
sprite23.velocityX = -10;
sprite24.velocityX = -10;
sprite25.velocityX = -10;
sprite26.velocityX = -10;
sprite27.velocityX = -10;
sprite28.velocityX = -10;
sprite29.velocityX = -10;
sprite30.velocityX = -10;
}

if (sprite1.collide(sprite3 || sprite4 || sprite5 || sprite6 || sprite7 || sprite8 || sprite9 || sprite10 || sprite11 || sprite12 || sprite13 || sprite14 || sprite15 || sprite16 || sprite17 || sprite18 || sprite19 || sprite20 || sprite21 || sprite22 || sprite23 || sprite24 || sprite25 || sprite26 || sprite27 || sprite28 || sprite29 || sprite30)) {
  sprite1.velocityX = -10;
}
}