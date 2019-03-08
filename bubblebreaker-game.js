
let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
	let x = random(width);
	let y = random(height);
	let r = random(10,30);
	let b = new Bubble(x,y,r);
  bubbles.push(b);
    
}
}

function mousePressed() {
 for (let i = 0; i < bubbles.length; i++) {
   if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i,1);
    }
 }
}

function draw() {
  background(0);
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
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  
  changeColor(bright) {
    this.brightness = bright;
  }
  
 contains(px,py) { 
   let d = dist(px,py, this.x, this.y); 
   if (d < this.r) {
     return true;
   } else {
     return false;
   }
  }
  
  move() {
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }
  
  show() {
    stroke(230);
    strokeWeight(2);
    fill(0,0,180,150);
    ellipse(this.x,this.y,this.r * 2);
  }

    
	
	
// var x = []; // new empty array
// var y = []; // new empty array
// var j = 0

 
// 	for (var j = 0;j > height;j === -10);
// 	ellipse(width/2,height,50,50);
	
// 	rect (150,390,80,20);
	



// x.push(mouseX); // equivalent to append(x, mouseX)
// y.push(mouseY); // equivalent to append(y, mouseY)

// for (var i = 0; i < x.length; i = i + 10) {
//     ellipse(x[i], y[i], 1 + (x.length - i));
		
//   }
//   x = x.slice(-50); // keep the last 50 x values
//   y = y.slice(-50); // keep the last 50 y values
 }
 

