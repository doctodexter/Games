class Enemy{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 40;
  }
  show(){
    fill(100,0,100);
    ellipse(this.x,this.y,this.r * 2);
  }
  move(){
    this.x -= 5;
  }
}
