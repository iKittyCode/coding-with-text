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
     for (let i = 0; i < textfile.length - 1; i++) {
  document.body.outerHTML = textfile[index]
    
}



}
function keyPressed() {
if (keyCode == RIGHT_ARROW) {
index+=1
} 
  if (index == textfile.length) {
  index = 0
}
}

