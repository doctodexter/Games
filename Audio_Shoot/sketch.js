let player;
let bullets = [];
let enemies = [];
let score = 0;
let mic;
function setup(){
  createCanvas(windowWidth,900);
  player = new Player();
  mic = new p5.AudioIn();
  mic.start();
  setInterval(function(){
      let enemy = new Enemy(2500,random(height));
    enemies.push(enemy);
  },2000);
}
function draw(){
  background(51);
  let mv = mic.getLevel();
  player.show();
fill(100,100,100);
  text("You can make noise to shoot as well!",30,30);
  text("Controls (W,A,S,D)",30,60);
  if(mv*10 > 1){
    let bullet = new Bullet(player.x,player.y);
    bullets.push(bullet);
  }
  for(var i = 0; i< bullets.length;i++){
  for(var j = 0;j < enemies.length;j++){
    if(bullets[i].hits(enemies[j]) === true){
      bullets.splice(i,1);
      enemies.splice(j,1);
      score += 1;
    }
  }
}
  for(var j = 0;j < enemies.length;j++){
    if(player.hitsEnemy(enemies[j]) === true){
      enemies.splice(j,1);
      score -=1;
    }
  }
textSize(35);
text(score,width/2,30);
for(var j = 0;j < enemies.length;j++){
  enemies[j].show();
  enemies[j].move();
}
for(var i = 0; i < bullets.length;i++){
  bullets[i].move(player.x,player.y);
  bullets[i].show();
}
if(player.hitsWall() === true){
  console.log("PLAYER HIT WALL");
}
if(player.hitsOther() === true){
  console.log("PLAYER HIT WALL");
}
if(keyIsDown(65)){
  player.left();
}
if(keyIsDown(68)){
  player.right();
}
if(keyIsDown(87)){
  player.up();
}
if(keyIsDown(83)){
  player.down();
}
}
function mousePressed(){
  let bullet = new Bullet(player.x,player.y);
  bullets.push(bullet);
}
