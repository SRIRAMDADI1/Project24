class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 50;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3)
      stroke("blue")
      fill("cyan");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  