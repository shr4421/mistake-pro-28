class Mango {

constructor (x,y,radius){

var  options={

isStatic:true,
restitution:0,
friction:1

}

this.radius=radius;
this.x=x;
this.y=y;
this.image=loadImage("Plucking mangoes/mango.png");
this.body=Bodies.circle(this.x,this.y,this.radius,options);

World.add(world,this.body);

}
 
display(){

    var Mangopos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(Mangopos.x,Mangopos.y);
    rotate(angle)
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();


}

}