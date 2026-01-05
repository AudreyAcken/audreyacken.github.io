function setup() {
    createCanvas(800, 600);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(10); 
  
    let hr = hour();
    let min = minute();
    let sec = second();
  
    // Map time to RGB (0-255)
    // hr % 12 ensures the red shade cycles every 12 hours
    let r = map(hr % 12, 0, 11, 0, 255); 
    let g = map(min, 0, 59, 0, 255);
    let b = map(sec, 0, 59, 0, 255);
  
    translate(width / 2, height / 2);
  
    // --- CENTER CIRCLE (The Combined Color) ---
    push(); 
    noStroke();
    fill(r, g, b); // The unique color of this exact second
    ellipse(0, 0, 100, 100); 
    pop(); 
  
    rotate(-90);
    blendMode(ADD); 
    noFill();
    strokeWeight(60); 
    let transparency = 150;
  
    // --- HOUR RING (Red) ---
    let hrAngle = map(hr % 12, 0, 12, 0, 360);
    stroke(r, 0, 0, transparency); 
    arc(0, 0, 300, 300, 0, hrAngle);
  
    // --- MINUTE RING (Green) ---
    let minAngle = map(min, 0, 60, 0, 360);
    stroke(0, g, 0, transparency); 
    arc(0, 0, 260, 260, 0, minAngle);
  
    // --- SECOND RING (Blue) ---
    let secAngle = map(sec, 0, 60, 0, 360);
    stroke(0, 0, b, transparency); 
    arc(0, 0, 220, 220, 0, secAngle);
  
    blendMode(BLEND); 
  }