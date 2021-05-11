class Umbrella{
    constructor(){
        var options={
            isStatic:true
        }
        this.image=loadImage("images/Walking Frame/walking_1.png")
        this.image2=loadImage("images/Walking Frame/walking_2.png")
        this.image3=loadImage("images/Walking Frame/walking_3.png")
        this.image4=loadImage("images/Walking Frame/walking_4.png")
        this.image5=loadImage("images/Walking Frame/walking_5.png")
        this.image6=loadImage("images/Walking Frame/walking_6.png")
        this.image7=loadImage("images/Walking Frame/walking_7.png")
        this.image8=loadImage("images/Walking Frame/walking_8.png")
        this.body=Bodies.circle(200,500,50,options);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        var rand = Math.round(random(1, 8))
        // if(frameCount%2.5===0){
        switch(rand){
            case 1: image(this.image,pos.x,pos.y+70,300,300)
            break;
        case 2: image(this.image2,pos.x,pos.y+70,300,300)
            break;
        case 3: image(this.image3,pos.x,pos.y+70,300,300)
            break;
        case 4: image(this.image4,pos.x,pos.y+70,300,300)
            break;
        case 5: image(this.image5,pos.x,pos.y+70,300,300)
            break;
        case 6: image(this.image6,pos.x,pos.y+70,300,300)
            break;
        case 7: image(this.image7,pos.x,pos.y+70,300,300)
            break;
        case 8: image(this.image8,pos.x,pos.y+70,300,300)
            break;
        default: break;
        
        //}
        // image(this.image,pos.x,pos.y+70,300,300)
    }
}
}





//"images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png"