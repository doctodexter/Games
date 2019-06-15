class Vulture{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 50;
  }
  show(){
    // setInterval(function(){
    animation(vulture,this.x,this.y,this.r,this.r);
  // },500);
  }
  move(){
    this.x -= 10;
  }
}
