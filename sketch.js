var bgImage, bunny1, bunny2
var gardenImage, portalAnimation
var barrierImage

function preload() {
  bgImage = loadImage("./assets/Horror image.jpg");
  bunnyImage = loadImage("./assets/bunny 1 image.png");
  gardenImage = loadImage("./assets/Garden image.jpg");
  barrierImage = loadImage("./assets/Hurdle Barrier Obstacle.png");
  bunny2Image = loadImage("./assets/Bunny image.png");
  portalAnimation = loadImage("./assets/Portal Animation Gif.gif");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width / 2, height / 2, width, height);
  bg.addImage(bgImage);
  bg.velocityX = 2;
  bg.scale = 3

  bunny = createSprite(75, height - 80, 20, 20)
  bunny.addImage("bunny", bunnyImage);
  bunny.addImage("bunny2", bunny2Image);

  bunny.scale = 0.25;
  
  edges = createEdgeSprites()



}

function draw() {
  background(0);


  if (bg.position.x > 800) {
    bg.position.x = width / 2
  }

  bunny.collide(edges);

  drawSprites()
}

function keyPressed() {
  if (keyCode === 39 && bunny.position.x < width - 20) {
    bunny.velocityX = +4
    bunny.changeImage("bunny2", bunny2Image);
  }

  if (keyCode === 37) {
    bunny.velocityX = -5
    bunny.changeImage("bunny", bunnyImage);
  }

  if (keyCode === 38) {
    bunny.velocityY = -4
  }

if(keyCode === 40){
  bunny.velocityY = 5
}

}


