




class Snake
{
  constructor(){
    this.len=0  
    this.body = [];
    this.body[0] =createVector(2,1);
    this.xdir=0
    this.ydir=0
  }
  
  
  
setDir(x,y){
  
  this.xdir=x;
  this.ydir=y;
  
}
  


  
  update(){
   
       
  
    let head = this.body[this.body.length-1].copy();
     this.body.shift();
    head.x += this.xdir
    head.y  += this.ydir
    this.body.push(head)
    
    // this.body[0].x += this.xdir
     //this.body[0].y += this.ydir
    
  }
  
  
  grow(){
      let head = this.body[this.body.length-1].copy();
    this.len++
    this.body.push(head)
  
  }

  endGame(){  
    let x= this.body[this.body.length-1].x
    let y= this.body[this.body.length-1].y
     for (let i=0; i < this.body.length-1; i++){
       
       let part = this.body[i];
       if (part.x==x & part.y==y){
         this.len=0
         return true
       }
     }
    if (x > w/r|| x<0||y>h/r||y<0){this.len=0
                                   return true}
    
    return false
    }

    eat(pos){
    let x= this.body[this.body.length-1].x
    let y= this.body[this.body.length-1].y
  
    if (x == pos.x && y == pos.y){return true;}
      
  
 
    
    
  }
  
   bubble(){
   
    {fill(0);
 ellipse(20,20,10,10);
 
 text("log in",5,5)
   textSize(3)   }
 
}

  
  show(){
    for (let i=0; i < this.body.length; i++)
    {fill(0);
  rect(this.body[i].x,this.body[i].y,(i*0.02)+1,(i*0.02)+1);
} 
 text(this.len,5,5)
   textSize(3)   
 
}

}
