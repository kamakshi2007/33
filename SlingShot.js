class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 400
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    /*fly(){
        this.sling.bodyA = null;
    }
    
    attach(body)  {
        this.sling.bodyA = body;
    }*/

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke("yellow")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            //console.lo
        
    }
    
dragged(){
    this.sling.pointB = {x:mouseX , y: mouseY};
    this.pointB = this.sling.pointB;
 }
}