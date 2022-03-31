
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bloco1,bloco2,bloco3;
var solo;

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;
	
	var bloco1_options ={restitution: 0.5,
	    friction: 0.02,
	    frictionAir: 0}
    var bloco2_options ={restitution: 0.7,
			friction: 0.01,
			frictionAir: 0.1}
	var bloco3_options ={restitution: 0.01,
				friction: 1,
				frictionAir: 0.3}

    var solo_options ={isStatic: true}


	//Crie os Corpos Aqui.
      bloco1 = Bodies.circle(220,10,25,bloco1_options);
      World.add(world,bloco1)
	  bloco2 = Bodies.rectangle(110,10,50,50,bloco2_options);
      World.add(world,bloco2)
	  bloco3 = Bodies.rectangle(350,10,50,50,bloco3_options);
      World.add(world,bloco3)
	  solo = Bodies.rectangle(400,750,800,100,solo_options);
	  World.add(world,solo)
	Engine.run(engine);
    
}

  function draw(){
  background(51);
  rectMode(CENTER);
  ellipse(bloco1.position.x,bloco1.position.y,50);
  rect(bloco2.position.x,bloco2.position.y,50,50);
  rect(bloco3.position.x,bloco3.position.y,50,50)
  
  Engine.update(engine);
  drawSprites();
 
}



