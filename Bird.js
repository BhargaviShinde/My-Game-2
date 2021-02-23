class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,60,280);
    this.image = loadImage("Metal Bottle.png");
  }

  display() {
    super.display();
  }
}
