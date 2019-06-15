class Obstacle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 75;
    this.xspeed = 15;
  }
  show(){
    fill(255);
    image(obstaclesimgs[0],this.x,this.y,this.r,this.r);
  }
  move(){
    this.x -= this.xspeed;
  }
}
