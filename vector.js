function Vector(x,y,z){
  this.x=x;
  this.y=y;
  this.z=z;

  this.add=function(v){
        this.x+=v.x;
        this.y+=v.y;
        this.z+=v.z;
    
  };
   this.addS=function(v){
        let a=this.x+v.x;
       let  b=this.y+v.y;
        let c=this.z+v.z;
     return new Vector(a,b,c);
    
  };

  this.sub=function(v){
      this.x-=v.x;
        this.y-=v.y;
        this.z-=v.z;
  };
   this.subS=function(v){
        let a=this.x-v.x;
       let  b=this.y-v.y;
        let c=this.z-v.z;
     return new Vector(a,b,c);
    
  };
  this.mag=function(){

    return sqrt(x*x+y*y+z*z);
  };
  this.normalize=function(){
    this.y=this.y/this.mag();
        this.x=this.x/this.mag();
    this.z=this.z/this.mag();

    
  }
  this.dot=function(v){
    return this.x*v.x+this.y*v.y+this.z*v.z
    
  }
  this.mult=function(s){
    this.x=this.x*s;
        this.y=this.y*s;
    this.z=this.z*s;

  }
  this.multS=function(s){
    return new Vector(this.x*s,this.y*s, this.z*s);
  }
  this.div=function(s){
    this.x=this.x/s;
        this.y=this.y/s;
    this.z=this.z/s;

  }
  this.divS=function(s){
    return new Vector(this.x/s,this.y/s, this.z/s);
  }
  this.cross=function(v){
    
  }
  this.angleBetween=function(v){
    let a=this.mag()*v.mag();
    return Math.acos(a);
  }
  

 }


 function Matrix(vector1,vector2,vector3){
  this.rowVector=vector1;
  this.rowVector2=vector2;
  this.rowVector3=vector3;
  


  this.det2D=function(){


    return  this.rowVector.x *this.rowVector2.y-this.rowVector.y *this.rowVector2.x;




  }
    
  this.translateVector=function(v){
    let a=this.rowVector.x*v.x+this.rowVector.y*v.y+this.rowVector.z*v.z;
    let b=this.rowVector2.x*v.x+this.rowVector2.y*v.y+this.rowVector2.z*v.z;
    let c=this.rowVector3.x*v.x+this.rowVector3.y*v.y+this.rowVector3.z*v.z;

    return new Vector(a,b,c);
  }

  
}