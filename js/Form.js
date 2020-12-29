class Form {
  constructor() {
    this.title = createElement('h1')
    this.input = createInput("Enter Your Name");
    this.button = createButton('Start');
    this.greeting = createElement('h3');
  }
  hide(){
    this.button.hide();
    this.greeting.hide();
    this.input.hide();
  }
  display(){
    //var title = createElement('h2')
    this.title.html("Multiplayer Car Racing Game");
    this.title.position(displayWidth/3,30);
    
    //var input = createInput("Enter Your Name");
    //var button = createButton('Start');
    
    /*que 1) How to change the size of input in DOM 
      ans    You cannot change them.
*/
    this.input.position(displayWidth/3, 160);
    this.button.position(displayWidth/3, 300);

    this.input.size(500,50);
    this.button.size(200,30)
    

    this.button.mousePressed(() =>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name);
      this.greeting.position(130, 160);
    });

  }
}
