class Bullet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 10;
  }
  show(){
    fill(0,255,0);
    ellipse(this.x,this.y,this.r * 2);
  }
  move(){
    this.x += 4;
  }
  hits(enemy){
    let d = dist(this.x,this.y,enemy.x,enemy.y);
    if(d < this.r + enemy.r){
      return true;
    }else {
      return false;
    }
  }
}
