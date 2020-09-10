class Stone{
    constructor(x,y){
        var options = {
            isStatic:true,
            friction: 0.04,
           density: 1,
           restitution:1
        }
        this.image= loadImage("Plucking mangoes/stone.png");
     this.x=x;
     this.y=y;
     this.body=Bodies.circle(this.x,this.y,16,options)
        World.add(world, this.body);
    }
    display(){
       var pos=this.body.position
       push()
       translate(pos.x,pos.y);
       imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();
    }
};