class Obstacle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 50;
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.r,this.r);
  }
  move(){
    this.x -= 10;
  }
}
