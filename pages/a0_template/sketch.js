function setup() {
    createCanvas(800, 600);
    angleMode(DEGREES);
  }
  
  function draw() {
    // Use a very dark background so the "additive" glow is visible
    background(10); 
  
    let hr = hour();
    let min = minute();
    let sec = second();
  
    // Map time to RGB (0-255)
    let r = map(hr, 0, 23, 0, 255);
    let g = map(min, 0, 59, 0, 255);
    let b = map(sec, 0, 59, 0, 255);
  
    translate(width / 2, height / 2);
    rotate(-90);
  
    // Set blend mode to ADD for color mixing
    blendMode(ADD); 
    noFill();
    
    // Make the lines thick so they overlap significantly
    strokeWeight(80); 
    let transparency = 150; // 0 is invisible, 255 is solid
  
    // --- HOUR CIRCLE (Red) ---
    let hrAngle = map(hr % 12, 0, 12, 0, 360);
    stroke(r, 0, 0, transparency); 
    arc(0, 0, 300, 300, 0, hrAngle);
  
    // --- MINUTE CIRCLE (Green) ---
    let minAngle = map(min, 0, 60, 0, 360);
    stroke(0, g, 0, transparency); 
    arc(0, 0, 280, 280, 0, minAngle); // Slightly smaller to create overlap area
  
    // --- SECOND CIRCLE (Blue) ---
    let secAngle = map(sec, 0, 60, 0, 360);
    stroke(0, 0, b, transparency); 
    arc(0, 0, 260, 260, 0, secAngle); // Even smaller for more overlap
  
    // Reset blend mode so other elements (like text) aren't affected
    blendMode(BLEND); 
  }