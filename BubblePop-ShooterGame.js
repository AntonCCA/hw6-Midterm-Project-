//  var pop;

// function preload() {
//   soundFormats('mp3', 'ogg');
//   pop = loadSound('sounds/splash.mp3');
// }

var j = 0
function rect() {
  this.x = width / 2;
}
let bubbles = [];

function setup() {
  createCanvas(600, 400);
  var j = 0

}

function mouseDragged() {
  let r = 40;
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
   this.rect();
  } else if (keyCode === LEFT_ARROW);
}

function keyPressed() {
  if(keyCode === SPACE) {
    this.ellipse();
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
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(230);
    strokeWeight(2);
    fill(0, 0, 180, 150);
    ellipse(this.x, this.y, this.r * 2);
    rect(200, height - 25, 60, 20); {
      fill(100, 180, 80, 180);
      ellipse( 230, 390, 10,10);
    

     
       j = j - 3

    
       if (j > height) {
         // reset
         j = 390;
      }
    }

  }
}
}
