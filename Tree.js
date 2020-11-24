class Tree {

constructor(x,y,width,height){

var option ={

    isStatic:true

}

this.body=Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;
this.image=loadImage("Plucking mangoes/tree.png");
World.add(world, this.body);

}
display (){

var Treepos=this.body.position;

push();
translate(Treepos.x,Treepos.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();

}
}