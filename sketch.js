const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var polygon;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26, box27, box28;
var box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40;
var slingshot;
var ground2;

function preload() {
    // polygon = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1400, 700);
    engine = Engine.create();
    world = engine.world;


    polygon = new Polygon(100, 250, 50, 59);
    ground = new Ground(550, 450, 350, 10);
    // box1 = new Box(390, 340, 40, 50);
    box2 = new Box(430, 340, 40, 50);
    box3 = new Box(470, 340, 40, 50);
    box4 = new Box(510, 340, 40, 50);
    box5 = new Box(550, 340, 40, 50);
    box6 = new Box(590, 340, 40, 50);
    box7 = new Box(630, 340, 40, 50);
    box8 = new Box(670, 340, 40, 50);
    // box9 = new Box(710, 340, 40, 50);
    // box10 = new Box(410, 290, 40, 50);
    // box12 = new Box(450, 290, 40, 50);

    box13 = new Boxpurple(470, 290, 40, 50);
    box14 = new Boxpurple(510, 290, 40, 50);
    box15 = new Boxpurple(550, 290, 40, 50);
    box16 = new Boxpurple(590, 290, 40, 50);
    box17 = new Boxpurple(630, 290, 40, 50);
    // box18 = new Box(690, 290, 40, 50);
    box19 = new Box(730, 290, 40, 50);

    box20 = new Boxgreen(510, 240, 40, 50);
    box21 = new Boxgreen(550, 240, 40, 50);
    box22 = new Boxgreen(590, 240, 40, 50);

    box23 = new Boxwhite(550, 190, 40, 50);


    ground2 = new Ground(1000, 250, 350, 10)

    box24 = new Box(880, 150, 40, 50);
    box25 = new Box(920, 150, 40, 50);
    box26 = new Box(960, 150, 40, 50);
    box27 = new Box(1000, 150, 40, 50);
    box28 = new Box(1040, 150, 40, 50);
    box29 = new Box(1080, 150, 40, 50);
    box30 = new Box(1120, 150, 40, 50);

    box31 = new Boxpurple(920, 100, 40, 50);
    box32 = new Boxpurple(960,100,40,50);
    box33 = new Boxpurple(1000,100,40,50);
    box34 = new Boxpurple(1040,100,40,50);
    box35 = new Boxpurple(1080,100,40,50);

    box36 = new Boxgreen(960,50,40,50);
    box37 = new Boxgreen(1000,50,40,50);
    box38 = new Boxgreen(1040,50,40,50);
    box39=new Boxwhite(1000,0,40,50);


    slingshot = new SlingShot(polygon.body, { x: 200, y: 250 });



}

function draw() {
    background(180);
    // image(polygon, 100, 250, 50, 50);
    Engine.update(engine);

    polygon.display();
    ground.display();
    // box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    // box9.display();
    // box10.display();
    // box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    // box18.display();
    // box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    ground2.display();
    box24.display();
    box25.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
}


