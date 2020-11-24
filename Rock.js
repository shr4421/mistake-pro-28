class Rock {

constructor(x,y,radius){

    var options={

        isStatic:false,
        restitution:0,
        friction:1,

        density:1.2

    }
    this.radius=radius;
    this.x=x;
    this.y=y;
    this.image=loadImage("Plucking mangoes/stone.png");
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    
    World.add(world,this.body);

}

display(){

    var Rockpos=this.body.position;

    push();
    translate(Rockpos.x,Rockpos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();

}

}