class Monster {
    constructor(x,y,r){
        var options = {
          //  isStatic:true
            frictionAir : 0,
            density:5
        }
        this.image = loadImage("monster-01.png")
        this.image2 = loadImage("monster-02.png")
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      

        World . add (world,this.body);
    }
    display(){
        var pos = this.body.position;
      //  var angle = this.body.angle
        push ();
        translate (pos.x,pos.y-100)
       // rotate (angle)
        rectMode(CENTER)
        fill(255)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
       // ellipse(40000,40000,this.r, this.r);
      pop ();
    }
}