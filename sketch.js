var wall,wall2,wall3,wall4;
var bullet;
var damage;
var speed,weight;
var thickness;

function setup()
{
  
  createCanvas(800,500);
  
  wall = createSprite(750,250,thickness,height/2);
  wall.shapeColor = "white";
  bullet = createSprite(50,250,50,10);
  bullet.shapeColor = "white";
  wall2 = createSprite(750,250,wall.thickness,height/2);
  wall2.shapeColor = "red";
  
  wall4 = createSprite(750,250,wall.thickness,height/2);
  wall4.shapeColor = "green";
  wall2.visible = false;
  
  wall4.visible = false;
}

function draw()
{
  
  background("grey");
  
  damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
  
  speed = random(55,90);
  weight = random(32,50); 
  thickness = random(22,83);
bullet.debug = false;
  
  
  console.log(damage)
  
  bullet.velocityX = speed;
  
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
  }
  
  if(bullet.velocityX === 0)
    {
      if(damage > 12)
        {
      wall.destroy();
      wall2.visible = true;   
    }
      
      
      if(damage < 4)
        {
      wall.destroy();
      wall4.visible = true;   
      
      
    }
      
    }
  
  drawSprites();
  
}

