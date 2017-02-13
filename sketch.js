/**
* Ewan Creed <ec8725@bard.edu>
* Feb 12 2017
* IDEA 135
* Sketch 4: Game Avatar
* Collaboration Statement: I worked alone on this assignment with assistance from the reference site for p5.js (https://p5js.org/reference/)
*/
function setup() {
    createCanvas(1000, 1000);
     background(24);
    ellipse(100, 100, 50, 25);
    fill(255, 0, 0);
    ellipse(120,50, 50, 25);
    
}

function draw() {
    background(24);
    noFill();
    stroke(255);
    strokeWeight(4);
   line(600, 400, 400, 400);
    fill(300,200,300);
    line(400, 400, 370, 380);
    fill(200,100,200);
    line(600,400, 630, 380);
    ellipse(425,410,20,20);
    ellipse(575,410,20,20);
    line(500,350,500,150);
    line(425,400,500,350);
    line(575,400,500,350);
    ellipse(500,118,70,65);
    fill(100,400,100);
    ellipse(490,110,10,10);
    ellipse(510,110,10,10);
    line(510,130,490,130);
    line(400,200,499,250);
    line(600,200,500,250);
    
    fill(0, 255, 0);
    textSize(32);
    text("GnArLyBrUh", mouseX, mouseY);
    textSize(24);

}




