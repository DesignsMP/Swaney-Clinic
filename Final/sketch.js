var imgNames = ["images/piranha.gif","images/Sturgeon.png","images/catfish.png","images/bull_shark.png"];
var imgs = [];
var fish = [];
var canvas;
function preload() {
  //for (var i=0; i<imgNames.length; i++);{
 // imgs[i] = loadImage("images/piranha.gif")}
  imgs[0] = loadImage(imgNames[0]);
  imgs[1] = loadImage(imgNames[1]);
  imgs[2] = loadImage(imgNames[2]);
  imgs[3] = loadImage(imgNames[3]);
  song = loadSound('libraries/Underwater sound effect.mp3');
}
function setup() {
  canvas = createCanvas(800,400);
  canvas.parent('sketch-holder');
  for (var i=0; i<imgs.length; i++) {
    fish[i] = new Fish(0,200,200,100,random(-3,3),random(-1,1),imgs[i])
  }
  song.setVolume(0.2);
  //song.play();
  song.loop();
  //print(test);
}

function draw() {
  background (50,130,110);
  
  noStroke();
  fill(70,170,150);
  rect(0,0,width,height/2);
  fill(130,100,0);
  rect(0,275,width,height/3);
  for (var i=0; i<fish.length; i++) {
    fish[i].display();
    fish[i].move();
  }
//print(fish[1].x)
fill(70,150,200,random(40,70));
rect(0,0,width,height)
}

