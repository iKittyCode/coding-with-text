var textfile;
var index = 0;
function preload() {
  textfile = loadStrings('chapter1.txt')
}
function setup() {
  createCanvas(400, 400);
 frameRate(4)
 
}

function draw() {
  background(220);
     for (let i = 0; i < 4; i++) {
  document.body.outerHTML = textfile[index]
}



}
function keyPressed() {
if (keyCode == RIGHT_ARROW) {
index+=1
}
  if (index == 5) {
  index = 0
}
}

