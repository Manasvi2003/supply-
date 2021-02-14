var thickness,wall;
var bullet,speed,weight;

function setup(){
createCanvas(1600,400);
car=createSprite(50,200,50,50);
car.shapeColor("pink");
speed=random(223,321);
thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2);
wall.shapecolor("blue");
car.velocityX=speed;


weight=random(30,52);
car.velocityX=speed;
}

function draw(){
    background("black");
    
     
    if(hasCollided(bullet,wall))
    {
        bullet.velocityX=0;
        var damage=0.5 * weight *speed * speed/(thickness * thickness * thickness);
        
        if(damage>10)
        {
            wall.shapecolor=color(255,0,0);

        }

        if(damage<10){
        wall.shapeColor=color(0,255,0);}
    }
      
    
          drawSprites();
    
    
};
function hasCollided(Lbullet,Lwall)
    {
        bulletRightEdge=Lbullet.x+Lbullet.width;
        wallLeftEdge=Lwall.x;
        if(bulletRightEdge>=wallLeftEdge)
        {
            return true
        
        }
        return false;
    }