const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;





function setup() {
  createCanvas(480,800);
 engine = Engine.create()
 world = engine.world
ground = new Ground(240,790,480,10)
for (var k =0 ; k<=width; k=k + 80){
  divisions.push(new Division(k,height-divisionheight/2,10,divisionheight))

}
for (var j = 40; j <= width;j = j + 50){
plinkos.push( new Plinko(j,75))

}

for (var j = 15; j <=width -10;j=j+50 ){

plinkos.push(new Plinko(j,175));

}}




function draw() {
  background(255,255,255);  
Engine.update(engine)
ground.display()
for (var k =0; k <divisions.length; k++)
{
 divisions[k].display();
}
for (var j =  0; j< plinkos.length;j++){
  plinkos[j].display();
}
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10,width/2+10),10,10))
}
for(var j = 0; j < particles.length; j++){
  particles[j].display();
}


}