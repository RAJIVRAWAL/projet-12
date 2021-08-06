var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImage;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var random = math.round(1,10);
console.log(random);

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.X = World.mouseX;

  createleaf();
  createapple();
  drawSprites();
}


var select_sprites = Math.round(random(1,2));
 
if (frameCount % 80 == 0){
   if (select_sprites == 1){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.5;
    apple.velocityY = -3

    }
   else{
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.scale = 0.5;
    leaf.velocityY = -3

    }
   }









