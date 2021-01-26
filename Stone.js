class Stone {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':2
      }
      this.body = Bodies.circle(x, y, r, options);
      //this.width = 30;
      //this.height = 30;
      this.r = r;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //eclipseMode(CENTER);
      fill("white");
      circle(0,0,this.r*2);
      pop();
      
    }
  };
  
