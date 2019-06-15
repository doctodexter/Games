class Dodo{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 50;
    this.gravity = 4;
    this.vy = 0;
  }
  show(){
    // this.gravity = constrain(this.gravity,0,400 - this.r);
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y,0,height - this.r - 100);
    animation(dodoanimation,this.x,this.y,this.r,this.r);
  }
  jump(){
    if(this.y === height - this.r - 100){
    this.vy = -45;
 }
}
hits(other){
  let d = dist(this.x,this.y,other.x,other.y);
  if(d < this.r - 20 + other.r + 20){
    return true;
  }
  else {
    return false;
  }
}
dead(){
    animation(deaddodo,this.x,this.y);
}
}
