/*class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("images/stone.png");
    }
  
    display() {
     // this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }
  */

  class Stone{
    constructor(x,y,radius){
        var options ={
            isStatic: false,
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        this.image = loadImage("images/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius*3,this.radius*3)
    }
}

  