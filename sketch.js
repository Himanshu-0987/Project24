const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber,iron,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    rubber = new Rubber(500,370,70,70)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300,470,80,80);
    stone = new Stone(700,470,40,40);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    iron.display();
    stone.display();
 
}