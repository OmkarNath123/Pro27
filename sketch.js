var bob1,bob2,bob3,bob4,bob5;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,690,800,20,ground_options);
    World.add(world,ground);

	roof = Bodies.rectangle(400,10,400,20,ground_options);
    World.add(world,roof);


	var options={
		restitution:0.20
 } 

	bob1= Bodies.circle(280,450,40 , options );
	World.add(world, bob1);
	//bob1.shapeColor=color("violet")

    bob2= Bodies.circle(320,450,40 , options );
	World.add(world, bob2);
	//bob2.shapeColor=color("indigo")
	
	bob3= Bodies.circle(400,450,40, options );
	World.add(world, bob3);
	//bob3.shapeColor=color("blue")
	
	bob4= Bodies.circle(460,450,40, options);
	World.add(world, bob4);
	//bob4.shapeColor=color("green")

	bob5= Bodies.circle(520,450,40, options );
	World.add(world, bob5);
    //bob5.shapeColor=color("yellow")
    chain1=new Chain(bob1.boby,roof.body,-bobDiameter*2,0)
    chain1=new Chain(bob2.boby,roof.body,-bobDiameter*2,0)
    chain1=new Chain(bob3.boby,roof.body,-bobDiameter*2,0)
    chain1=new Chain(bob4.boby,roof.body,-bobDiameter*2,0)
    chain1=new Chain(bob5.boby,roof.body,-bobDiameter*2,0)
     
	Engine.run(engine);
  
}


function draw() {
  background("orange")
  
  Engine.update(engine);
  rectMode(CENTER);
  fill ("black")
  rect (roof.position.x,roof.position.y,400,20);
  fill ("red")
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  fill ("violet")
  ellipse(bob1.position.x,bob1.position.y,40,40);
  fill ("indigo")
  ellipse(bob2.position.x,bob2.position.y,40,40);
  fill ("blue")
  ellipse(bob3.position.x,bob3.position.y,40,40);
  fill ("green")
  ellipse(bob4.position.x,bob4.position.y,40,40);
  fill ("yellow")
  ellipse(bob5.position.x,bob5.position.y,40,40);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
ground.display();
  
 
}



