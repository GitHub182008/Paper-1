const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, Trashcan3, Trashcan2, Trashcan1
function preload() {}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 580, 1200, 20);
	Trashcan1 = new Trashcan(900, 550, 200, 20);
	Trashcan2 = new Trashcan(790, 510, 20, 100);
	Trashcan3 = new Trashcan(1010, 510, 20, 100);
	paperBall = new PaperBall(200, 250, 20);
	Engine.run(engine);
}

function draw() {
	background(0);
	ground.display();
	Trashcan1.display();
	Trashcan2.display();
	Trashcan3.display();
	paperBall.display();
	Engine.update(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {
			x: 0.035,
			y: -0.079,
		});
	}
}
