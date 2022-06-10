var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nuvems ;
var nuvemsimagens;
var cacto1, cacto2, cacto3, cacto4, cacto5, cacto6;


var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  nuvemsimagens  = loadImage ("cloud.png");
 
  cacto1 = loadImage("obstacle1.png");
  cacto2 = loadImage("obstacle2.png");
  cacto3 = loadImage("obstacle3.png");
  cacto4 = loadImage("obstacle4.png");
  cacto5 = loadImage("obstacle5.png");
  cacto6 = loadImage("obstacle6.png");
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //definir cor do plano de fundo
  background(180);
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //Gerar Nuvens
  spawnClouds()
  spawnCactos();
  
  drawSprites();
}

//fun��o para gerar as nuvens
function spawnClouds(){
 //escreva seu c�digo aqui
 if (frameCount%60===0){
   nuvems = createSprite (600,100,40,10);
   nuvems.velocityX = -3;
   nuvems.addImage(nuvemsimagens);
   nuvems.scale= 0.5;
   nuvems.y = Math.round(random(10,70));

   trex.depth = trex.depth + 2;
   nuvems.depth = nuvems.depth;
 }
 
}

function spawnCactos() {
  if (frameCount%60===0){
    var cacto = createSprite(600, 165, 10, 40);
    cacto.velocityX = -6;

    var aleatorios = Math.round(random(1, 6));

    switch (aleatorios) {
      case 1: cacto.addImage(cacto1);    
        break;
      case 2 : cacto.addImage(cacto2);
        break;
      case 3 : cacto.addImage(cacto3);
        break;
      case 4 : cacto.addImage(cacto4);
        break;
      case 5 : cacto.addImage(cacto5);
        break;
      case 6 : cacto.addImage(cacto6);
        break;
      default:
        break;
    }
    cacto.scale = 0.5;
  }
}
