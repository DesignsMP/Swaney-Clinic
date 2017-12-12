function Fish(posx,posy,w,h,sx,sy,img) {
  this.x = posx
  this.y = posy
  this.w = w
  this.h = h
  this.sx = sx
  this.sy = sy
  this.img = img
  this.display = function() {
    push();
    if (sx>0) {
    scale(-1,1)
    image(this.img,this.x,this.y,-this.w,this.h);
    } else {
      image(this.img,this.x,this.y,this.w,this.h);
    }
    
    pop();
  }
  this.move = function() {
    this.x -= abs(this.sx)
    this.y += this.sy
   if (this.sx<0 && this.x<-this.w) {
      this.x = width
    } else if(this.sx>0 && this.x<-width){
      this.x = this.w
    }
    if(this.y<0||this.y>height-this.h) {
      this.sy = -this.sy
    }
  }
}