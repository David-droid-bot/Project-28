class Shoot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.shoot = Constraint.create(options);
        World.add(world, this.shoot);
    }
    fly(){
        this.shoot.bodyA = null;
    }
// attach
    display(){
        if(this.shoot.bodyA){
        var pointA = this.shoot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}