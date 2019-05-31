class Player{
  constructor(x,y){
    this.x = 30;
    this.y = 800;
    this.r = 25;
  }
  show(){
    fill(255,0,0);
    ellipse(this.x,this.y,this.r*2);
  }
  left(){
    this.x -= 8;
  }
  right(){
    this.x += 8;
  }
  up(){
    this.y -= 10;
  }
  down(){
    this.y += 10;
  }
  hitsWall(){
    if(this.x > width || this.x < 0){
      this.x = 0;
      return true;
    }else {
      return false;
    }
  }
  hitsOther(){
    if(this.y > height || this.y  < 0){
      this.y = 0;
      return true;
    }else{
      return false;
    }
  }
  hitsEnemy(other){
    let d = dist(this.x,this.y,other.x,other.y)
    if(d < this.r + other.r){
      return true;
    }else{
      return false;
    }
  }
}
