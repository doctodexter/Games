class Dodo{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 50;
    this.gravity = 3;
    this.vy = 0;
    this.c = 0;
  }
  show(){
    // this.gravity = constrain(this.gravity,0,400 - this.r);
    this.y += this.vy;
    this.vy += this.gravity;
    if(constrainYN === true){
    this.y = constrain(this.y,0,height - this.r - 140);
  }else if(constrainYN === false){
    this.y = constrain(this.y,0,height - this.r + 50);
  }
    animation(dodoanimationcurrent,this.x,this.y,this.r,this.r);
  }
  jump(){
    if(this.y === height - this.r - 140){
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
glide(){
  if(this.y < height - this.r - 140){
    this.gravity = 0.1;
  }
}
gravityDefault(){
  this.gravity = 3
}
crouch(){
  dodoanimationcurrent = dodoanimationcrouch;
  constrainYN = false;
}

crouchStop(){
  dodoanimationcurrent = dodoanimation;
  this.y = constrain(this.y,0,height - this.r - 140);
  constrainYN = true;
}
}
