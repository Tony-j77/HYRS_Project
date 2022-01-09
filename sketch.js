var blob;
var blobs = [];
var zoom = 1;
var xcan = window.innerWidth; 
var ycan =  window.innerHeight;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var score = 0 


function setup() {
  createCanvas(xcan, ycan)
  blob = new Blob(0, 0, 60, 600);
  for (var i = 0; i < 200; i++) {
    var x = random(-width, width);
    var y = random(-height, height);
    blobs[i] = new Blob(x, y, 3, "lime");
    
}
}

function draw() {
  background('crimson');

  translate(width / 2, height / 2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
      score += 1;
    }
  }

  blob.show();
  blob.update();
}

//=========================================================================================//

function Blob(x, y, r, c) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0, 0);
  this.color = c;

  this.update = function() {
    var newvel = createVector(mouseX - width / 2, mouseY - height / 2);
    newvel.setMag(3);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  };

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      //this.r += other.r;
      return true;
    } else {
      return false;
    }
  };

  this.show = function() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  };
}
