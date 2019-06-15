let dodo;
let deaddodo;
let obstacles = [];
let vulture;
let dodosaur;
let rn;
let backgroundimg;
let score = 0;
let vultures = [];
let mic;
let v;
let constrainYN = true;
let dodoanimationcurrent;
let obstaclesimgs = [];
function preload(){
  // dodosaur = loadImage('assets/images/pixeldodo.png');
  backgroundimg = loadImage('assets/images/background.gif');
  obstaclesimgs[0] = loadImage('assets/images/rock.png');
  obstaclesimgs[1] = loadImage('assets/images/mEN3.png');
  obstaclesimgs[2] = loadImage('assets/images/men.png');
  deaddodo = loadImage('assets/images/deaddodo.png');
  dodoanimation = loadAnimation('assets/images/pixeldodo0001.png','assets/images/pixeldodo0002.png');
  deaddodo = loadAnimation('assets/images/dodocry0001.png' , 'assets/images/dodocry0003.png');
  vulture = loadAnimation('assets/images/vulture0001.png','assets/images/vulture0007.png');
  dodoanimationcrouch = loadAnimation('assets/images/dodocrouch.png');
  dodoanimationcurrent = dodoanimation;
}
function setup(){

   createCanvas(1700,800);
   setInterval(function(){
    let randomNumber = Math.round(random(1))
    if (randomNumber >= 0.5) v = new Vulture(width + 30,random(50, 300));
    if (randomNumber < 0.5) v = new Vulture(width + 30,random(775, 500));
    vultures.push(v);
   },3000);
   // mic = new p5.AudioIn();
   // mic.start();
   dodo = new Dodo(150,200);
   setInterval(function(){
     let o = new Obstacle(width + 20,height - 120);
     obstacles.push(o);
   },3000);
   setInterval(function(){
     score += 1;
   },100);
}
function keyPressed(){
  if(key == ' '){
    dodo.jump();
  }
  if(keyCode === 17){
    dodo.crouch();
  }
}
function keyReleased(){
  if(keyCode === 17){
    dodo.crouchStop();
  }
}
function mousePressed(){
  if(mouseButton === LEFT){
    dodo.glide();
  }
}
function mouseReleased(){
  if(mouseButton === LEFT){
    dodo.gravityDefault();
  }
}

function draw(){
  background(backgroundimg);
  // let micvol = mic.getLevel();
  // if(micvol * 20 > 1){
  //   dodo.jump();
  // }
  // console.log(micvol);
  // animation(dodoanimation,width/2,height/2);
for(var j = 0;j < vultures.length;j++){
  if(dodo.hits(vultures[j])){
    noLoop();
    fill(255,0,0);
    textSize(50);
    text('Game Over!',width/2,height/2);
    setInterval(function(){
    dodo.dead();
  },100);
  }
  vultures[j].show();
  vultures[j].move();
  if(vultures[j].x < 0){
    vultures.splice(j,1);
  }
}

for(var i = 0;i < obstacles.length;i++){
if(dodo.hits(obstacles[i])){
  noLoop();
  fill(255,0,0);
  textSize(50);
  text('Game Over!',width/2,height/2);
  setInterval(function(){
  dodo.dead();
},100);
}
    obstacles[i].show();
    obstacles[i].move();
}

  dodo.show();
  fill(255);
  textSize(50);
  text(`Score = ${score}`,width/2,50);
}
