const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20;
var world,engine;
var plinko = [];
var b1,b2,b3,b4,b5;
var particles=[];

function setup() {
  createCanvas(480,600);
  engine=Engine.create();
  world=engine.world;

for(var k = 0; k<=width-20; k=k+60)
{
  plinko.push(new Circle(k,160,20));
}


for(var l = 0; l<=width-20; l=l+60)
{
  plinko.push(new Circle(l,200,20));
}

  /*c7 = new Circle(40,100,20);
  c1 = new Circle(90,100,20);
  c2 = new Circle(140,100,20);
  c3 = new Circle(190,100,20);
  c4 = new Circle(240,100,20);
  c5 = new Circle(290,100,20);
  c6 = new Circle(340,100,20);
  c8 = new Circle(390,100,20);
  c10 = new Circle(210,300,60);
*/
  b1 = new Rectangles(10,500,10,300);
  b2 = new Rectangles(150,500,10,300);
  b3 = new Rectangles(290,500,10,300);
  b4 = new Rectangles(430,500,10,300);
  b5 = new Rectangles(240,590,600,10);
  
}

function draw() {
  background("black");  
  Engine.update(engine);
/*c1.display();
c2.display();
c3.display();
c4.display();
c5.display();
c6.display();
c7.display();
c8.display();
c10.display();
*/
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();

for(var i = 0; i<plinko.length; i=i+1)
{
  plinko[i].display();

}


for(var g = 0; g<plinko.length; g=g+1)
{
  plinko[g].display();

}

//if(frameCount%90===0)
//{
  particles.push(new Particle(random(0,480),10,10));

//}
  for(var j=0; j<particles.length; j++)
  {
      particles[j].display();
  }
}