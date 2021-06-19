class Game{
  constructor(){

  }
getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();

    })    
}

update(state){
    database.ref('/').update({
        gameState:state
    });
    
}
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   
    fighter1 = createSprite (200,500,30,30);
    fighter1.addAnimation('fighter1',fighter1Img);
    fighter1.scale = 4;
    
    fighter2 = createSprite (670,500,50,50);
    fighter2.addAnimation('fighter1',fighter2Img);
    fighter2.scale = 5.3;
//fighter2.depth=fighter1.depth-1;
    healthBar1 = createSprite(670,20,200,20);
    healthBar1.shapeColor='green';
    healthBar2=createSprite(200,20,200,20);
    healthBar2.shapeColor='green';
   

    healthbar=[healthBar1,healthBar2];
    
    
    fighter = [fighter1,fighter2];

  fighterImages=[fighter1PunchImg,fighter2PunchImg];
  fImg=[fighter1Img,fighter2Img];
  fkick=[fighter1KickImg,fighter2KickImg];

}
play(){
    form.hide();
    Player.getPlayerInfo();

    background(backgroundImg);
   
      var index = 0;
       //x and y position of the cars
     var x = 100 ;
     var y = 50;
      //var y;
      
      for(var plr in allPlayers){
        x=x+20;
        index = index + 1 ;
        x = 500 - allPlayers[plr].distance;
        y = 490;

       fighter[index-1].x=x;
       fighter[index-1].y=y;
  
      healthbar[index-1].width=allPlayers[plr].width;
     
    
    

        if (index === player.index){
          if (keyDown('LEFT_ARROW')){
            player.distance+=10;  
            player.update();
          }
          if (keyDown('RIGHT_ARROW')){
            player.distance-=10;  
            player.update();
          }
          if (keyWentDown('p') ){
            if(player.isTouching1(fighter1,fighter2)){
            fighter[index-1].addAnimation('fighter1',fighterImages[index-1]);
             player.punch++;
             player.health--;
           player.width-=5;
             player.update();
            // player.updateImage();
            }         
          }
          if(keyWentUp('p')){
            fighter[index-1].addAnimation('fighter1',fImg[index-1]);
          }   
          if (keyWentDown('k') ){
            if(player.isTouching1(fighter1,fighter2)){

            fighter[index-1].addAnimation('fighter1',fkick[index-1]);
             player.punch++;
             player.health--;
           player.width-=10;
             player.update();
            }         
          }
          if(keyWentUp('k')){
            fighter[index-1].addAnimation('fighter1',fImg[index-1]);
          }   
        } 
        if(allPlayers.player1.width<5 || allPlayers.player2.width<5){
          game.update(2);
           
       }
      }
        
   
       
  
      
     
    drawSprites();
} 
end(){
  clear();
  textSize(30);
 if(allPlayers.player1.health <allPlayers.player2.health){
     fill("red");
      text(allPlayers.player1.name+"wins",displayWidth/4, displayHeight/9 + 73)
    image(image1,70,200,displayWidth/4, displayHeight/9 + 100)
    //image(image2die,70,200,displayWidth/4+400, displayHeight/9 + 100)
 }
 else{
 fill("red");
 text(allPlayers.player2.name+"wins",displayWidth/4, displayHeight/9 + 79)
 image(image2,70,200,displayWidth/4, displayHeight/9 + 100)
 image(image1die,displayWidth/4+400, displayHeight/9 + 100,200,200)

 }
}
}

