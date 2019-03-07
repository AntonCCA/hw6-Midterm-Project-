function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0);
}

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -20;
  this.velocity = 0;

  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift;
    printIn(this.velocity);
  }

  this.update = function() {
      this.velocity += this.gravity;
      this.velocity += 0.9;
      this.y += this.velocity;

      if (this.y > height) {
        this.y = height

      }
    }

}

  
