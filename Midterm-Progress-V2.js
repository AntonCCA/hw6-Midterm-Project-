var bubblingsound;
var rx=200;
var a=1;
function preload() {
  bubbleSound = loadSound("bubbling.sound.mp3");
}


function rect() {
  this.x = width / 2;
}
let bubbles = [];

function setup() {
  createCanvas(500, 500);
}

function mouseDragged() {
  let r = 40;
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
  bubbleSound.play();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
   rx=rx+15;
  } else if (keyCode === LEFT_ARROW){
  rx=rx-15;
  }
}

function draw() {
  background(51);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }


  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + 5*a;
    if(this.y>height-25-45){
    a=-1;
    }else if(this.y <45){
    
    a=1;}
  }

  show() {
    stroke(230);
    strokeWeight(2);
    fill(0, 0, 180, 150);
    ellipse(this.x, this.y, this.r * 2);
    rect(rx, height - 25, 60, 20); 
      // fill(100, 180, 80, 180);
      // ellipse( 230, 390, 10,10);
    
      
    }

  }

