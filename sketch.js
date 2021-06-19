var canvas,backgroundImg;
var gameState = 0;
var playerCount ,database;
var form,game,player;
var allPlayers;
var fighter1,fighter2;
var fighter1Img, fighter2Img
var fighter1PunchImg;
var fighter1KickImg;
var background;
var fighter,fighterImages,fImg,healthbar ;
var healthBar1,healthBar2,fkick,storage;
var edges,fighterGroup,fighter1side,fighter2side;
var image1,image2;
function preload (){
  fighter1Img = loadAnimation("still.png");
  image1 = loadImage("still.png");
  image2 = loadImage("fighter2.png");
  image1die=loadImage("fighter1Die3.png");
  backgroundImg = loadImage("bb.png");
  fighter1PunchImg = loadAnimation("punch0.png","punch1.png","punch2.png","punch3.png","punch4.png","fighter5.png","fighter6.png");
  fighter1KickImg = loadAnimation("fighterkick1.png","fighterkick2.png","fighterkick4.png","fighterkick5.png","fighterkick6.png");
  fighter2KickImg = loadAnimation("fighterP2.png","fighterP3.png","fighterP4.png");
 fighter2Img = loadAnimation("fighter2.png");
  fighter2PunchImg = loadAnimation("fighter2Punch3.png","fighter2Punch1.png","fighter2Punch2.png");
}
function setup(){
  canvas = createCanvas(displayWidth/2+250,displayHeight/2+250);
database = firebase.database();
storage=firebase.storage();
fighterGroup=createGroup();
game = new Game();
game.getState();
game.start();

}

function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  if(gameState===2){
    clear();
    game.end();
    //imageMode(CENTER);
   // Player.getPlayerInfo();

   
   // textAlign(CENTER);
   // textSize(50);
  //  for(var plr in allPlayers){
    //  if(allPlayers[plr].width <5){
    //    text("Winner is:  "+allPlayers[plr].name,displayWidth/4, displayHeight/9 + 73);
    //  }
    //  else if(allPlayers[plr].rank === 2){
     //   text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
    //  }else if(allPlayers[plr].rank === 3){
     //   text("3rd: " + allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76);
//else{
   //   textSize(30);
   // text("Winner: " + allPlayers[plr].name,displayWidth/-4, displayHeight/10 + 76);
   
  //  }
   // text("game end",200,200);
 // }
}
}
