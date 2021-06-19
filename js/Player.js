class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.punch=0;
      this.health=500;
      this.width=200;
    }
    
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
       punch: this.punch,
       health:this.health,
       width:this.width
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
      isTouching1(object1,object2){
        if (object1.x - object2.x < object2.width/2 + object1.width/2)
         // && object2.x - object1.x < object2.width/2 + object1.width/2) {
          {
          return true;
        }
        else {
          return false;
        } 
    }
    isTouching2(object1,object2){
      if (object2.x - object1.x < object2.width/2 + object1.width/2) {
        return true;
      }
      else {
        return false;
      } 
  }
  updateImage(){
         const storageRef = firebase.storage().ref();
    
      // [START storage_download_full_example]
      // Create a reference to the file we want to download
      var starsRef = storageRef.child('fighter1/punch0.png');
    
      // Get the download URL
      starsRef.getDownloadURL()
      .then((url) => {
        ImgUrl=url;
      });

      firebase.database().ref('fighter1/'+punch0).set({
        Name:punch0,
        Link:ImgUrl
      });
  }
}
