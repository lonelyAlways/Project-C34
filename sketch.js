var happyDog,Dog;
var database,foodS,foodStock;

function preload()
{
  DogOp=loadImage("Dog.png");
  DogHappy=loadImage("happydog.png");
}

function setup() {
  createCanvas(1200, 1200);
  
  database=firebase.database();

  Dog=createSprite(600,600,10,20);
  Dog.addImage(DogOp);

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

}


function draw() {  
background(46,139,87)

if(keyWentDown("up")){
  writeStock(foodS)
  Dog.addImage(DogHappy)

}
  drawSprites();
  //add styles here
}
function readStock(){
  foodS=data.val()
}
function writeStock(x){
  if(x=0){
  x=0;
  }else{
    x=x+1;
  }
  database.ref('/').update({
    Food:x   
  })
  }




