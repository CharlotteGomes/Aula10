var playerMallet;

var gameState = "serve"; 

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";

var boundary5 = createSprite (200, 175, 50,5);
boundary5.shapeColor = "white";

var boundary6 = createSprite (200, 225, 50, 5);
boundary6.shapeColor = "white";

var boundary7 = createSprite (225, 200, 5, 50);
boundary7.shapeColor = "white";

var boundary8 = createSprite (175, 200, 5 , 50);
boundary8.shapeColor = "white";

var boundary9 = createSprite (200, 185, 30,3);
boundary9.shapeColor = "white";

var boundary10 = createSprite (200, 215, 30,3);
boundary10.shapeColor = "white";

var boundary11 = createSprite (215, 200, 3, 30);
boundary11.shapeColor = "white";

var boundary12 = createSprite (185, 200, 3 , 30);
boundary12.shapeColor = "white";

var boundary13 = createSprite (200, 125, 400, 5);
boundary13.shapeColor = "white";

var boundary14 = createSprite (200, 275, 400, 5);
boundary14.shapeColor = "white";

var boundary15 = createSprite (125, 45, 5, 75);
boundary15.shapeColor = "white";

var boundary16 = createSprite (275, 45, 5, 75);
boundary16.shapeColor = "white";

var boundary17 = createSprite (125, 355, 5, 75);
boundary17.shapeColor = "white";

var boundary18 = createSprite (275, 355, 5, 75);
boundary18.shapeColor = "white";

var boundary19 = createSprite(200, 315, 150, 5);
boundary19.shapeColor = "white";
var boundary20 = createSprite(200, 85, 150, 5);
boundary20.shapeColor = "white";

var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

var playerScore=0;
var compScore=0;

function draw() {
background("green")

 textSize(18);
  fill("maroon");
  text(" "+playerScore, 25,185);
  text(" "+compScore,360,225);
  
  //Começar jogo
  if (gameState=="serve") {
    textSize(18);
  fill("maroon");
  text("Pressione espaço para atacar", 90, 160)
   if (keyDown("space")) {
    serve(); 
    gameState="play"
   }
  
  }
//Jogo em andamento
  if (gameState=="play") {
  
   if (keyDown("space")) {
    serve();
   }
  if(compScore == 5)
      {
        gameState="end"
      }
  }
//Terminar jogo
  if (gameState=="end") {
    textSize(18); 
  fill("maroon");
  text("Fim de jogo!", 145, 147)
  text("Pressione espaço para recomeçar", 75,166)
   
   if (keyDown("space")) {
    serve(); 
    gameState="play"
    compScore = compScore-5
   }
      
   
   
   
  }

 if(striker.isTouching(goal1))
      {
        compScore = compScore+1 ;
        striker.x=200
        striker.y=200
        striker.velocityX=0;
        striker.velocityY=0;
      }
 if(striker.isTouching(goal2))
      {
        playerScore = playerScore+1;
        
        striker.x=200
        striker.y=200
        striker.velocityX=0;
        striker.velocityY=0;
      }  

computerMallet.x = striker.x;

 for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }

createEdgeSprites();

striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);


function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
}

 if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }

if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }

if(keyDown("up")){
   if(playerMallet.y>25)
   
    playerMallet.y = playerMallet.y- 10;
   }

if(keyDown("down")){
    if(playerMallet.y<120)
   
    playerMallet.y = playerMallet.y+10;
   }


drawSprites();
    
}

