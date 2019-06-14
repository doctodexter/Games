let dodo;
let obstacles = [];
let dodosaur;
let rn;
let backgroundimg;
let fox;
let score = 0 ;
function preload(){
  dodosaur = loadImage('assets/images/dodo.png');
  backgroundimg = loadImage('assets/images/otherbackground.jpg');
  fox = loadImage('assets/images/fox.png');
}
function setup(){
   createCanvas(700,500);
   dodo = new Dodo(50,200);
   setInterval(function(){
     let o = new Obstacle(width + 20,height - 50);
     obstacles.push(o);
   },5000);
   setInterval(function(){
     score += 1;
   },100);
}
function keyPressed(){
  if(key == ' '){
    dodo.jump();
  }
}
function draw(){
  background(backgroundimg);
  for(var i = 0;i < obstacles.length;i++){
if(dodo.hits(obstacles[i])){
  noLoop();
  fill(255,0,0);
  textSize(30);
  text('Game Over!',width/2,20)
}
    obstacles[i].show();
    obstacles[i].move();

  }
  dodo.show();
  fill(255);
  text(`Score = ${score}`,width/2,50);
if(score > 100){
  frameRate(120);
}
}
