let dodo;
let deaddodo;
let obstacles = [];
let dodosaur;
let rn;
let backgroundimg;
let score = 0;
let mic;
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
}
function setup(){
   createCanvas(1700,800);

   // mic = new p5.AudioIn();
   // mic.start();
   dodo = new Dodo(150,200);
   setInterval(function(){
     let o = new Obstacle(width + 20,height - 70);
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
}
function draw(){
  background(backgroundimg);

  // let micvol = mic.getLevel();
  // if(micvol * 20 > 1){
  //   dodo.jump();
  // }
  // console.log(micvol);
  // animation(dodoanimation,width/2,height/2);

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
