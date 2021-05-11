const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let world, engine;
let thunder_Obj, thunder1, thunder2, thunder3, thunder4, thunder5, thunderFrame;
let mainObject, maxDrops = 100;
let rain = []

function preload() {
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

}

function setup() {
    engine = Engine.create();
    world = engine.world;

    createCanvas(400, 700);
    mainObject = new Umbrella();
    // if (frameCount % 150 === 0) {
        for (var i = 0; i < maxDrops; i++) {
            console.log(i)
            rain.push(new WaterDrop(random(0, 400), random(0, 400))) ;
            
        // }
    }
    Engine.run(engine);
}

function draw() {
    Engine.update(engine);
    background(0);
    var rand = Math.round(random(1, 4))

    if (frameCount % 80 === 0) {
        thunderFrame = frameCount;
        thunder_Obj = createSprite(random(10, 370), random(10, 30), 10, 10)
        switch (rand) {
            case 1: thunder_Obj.addImage(thunder1);
                break;
            case 2: thunder_Obj.addImage(thunder2);
                break;
            case 3: thunder_Obj.addImage(thunder3);
                break;
            case 4: thunder_Obj.addImage(thunder4);
                break;
            default: break;
        }
        thunder_Obj.scale = random(0.3, 0.6)
    }
    if (thunderFrame + 10 === frameCount && thunder_Obj) {
        thunder_Obj.destroy();
    }
    mainObject.display();
        for (var i = 0; i < rain.length; i++) {
        rain[i].display();
        rain[i].updateY();
    }
 

    drawSprites();
}

