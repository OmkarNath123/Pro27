class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
    var options={
    bodyA:body1,
    bodyB:body2,
   pointB:{x:this.offsetX,Y:offsetY}
    
    } 
    this.chain=Constraint.create(options);
    World.add(world,this.chain)
    }
    display(){
    var A= this.chain.bodyA.position;   
    var B= this.chain.bodyB.position;
    line(A.x,A.y,B.x,B.y);  
    }
    }