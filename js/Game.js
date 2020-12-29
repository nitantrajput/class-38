class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var reference = await database.ref("playerCount").once("value")
      if(reference.exists()){
        playerCount = reference.val()
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);

  }
  play(){
    form.hide()
    //textSize(30)
    //text("Game Started",120,100)
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
      var index = 0;
      var x = 0;
      var y 
      for(var p in allPlayers){
        index += 1
        x = x + 200;
        y = displayHeight - allPlayers [p].distance
        carz[index - 1].x = x
        carz[index - 1].y = y;
        
        if(p === "player"+ player.index){
          fill("red");
          carz[index - 1].shapeColor = "black";
          }
          else{
            fill("black");
          }
        /*position = position + 20
        textSize(20);
        text(allPlayers[p].name + " = " + allPlayers[p].distance,120,position)*/
        }
      }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
      }
      drawSprites();
  }
}
