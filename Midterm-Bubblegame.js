var bubblingsound;
var rx = 300;
var a = 1;
let bubbles = [];
var score = 0;
var isTouch = false;

function preload() {
  bubbleSound = loadSound("bubbling.mp3");

}


function setup() {
  createCanvas(500, 500);
  let b = new Bubble(random(20, width), random(20, height), 40, 1);
  bubbles.push(b);
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }

}

function keyPressed() {
  let b1 = new Bubble(random(0, width), random(0, height / 3), 40, 1);

  if (keyCode === RIGHT_ARROW) {
    rx = rx + 25;
  } else if (keyCode === LEFT_ARROW) {
    rx = rx - 25;
  }

  if (keyCode == 32) {
    bubbles.push(b1);
    bubbleSound.play();
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

    for (let i = 0; i < bubbles.length; i++) {
      if (bubbles[i].bottombar(rx + 25, height - 25)) {
        bubbles[i].a = -1;  //changing moving direction
        isTouch = true; //determine if the bubble touches the rect
      }
      if (isTouch) {  //if isTouch is true
        score++;  //add one to the score
        print('score =' + score)
      }
      if (bubbles[i].y < 45) {
        bubbles[i].a = 1;
      }
      isTouch = false;
    }
    // for (let i = 0; i < bubbles.length; i++) {
    //   if (bubbles[i].Va()) {
    //     bubbles[i].a = -1;
    //   } else{
    //   bubbles[i].a = 1;
    //   }
    // }

    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, a) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.a = a;
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
  
  bottombar(rx, ry) {
    let d = dist(rx, ry, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + 2 * this.a;

  }
  // Va(){
  //    if (this.y > height-45-25 && this.y<=45 ) {
  //     return true; 
  //   }else{
  //     return false;
  //   } }

  show() {
    stroke(230);
    strokeWeight(2);
    fill(0, 200, 180, this.brightness);
    ellipse(this.x, this.y, this.r * 2);
    fill(0, 0, 180);
    rect(rx, height - 25, 60, 20);
    
  }

}
