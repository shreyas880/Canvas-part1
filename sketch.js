var cursor;
var space;

function setup() {
  createCanvas(windowWidth , windowHeight);

  cursor = [];

  space = 0;

}

function draw() {
  background(255,0,0);
  
  for(var i = 0; i<cursor.length-1 ; i++){
    line(cursor[i][0], cursor[i][1] , cursor[i+1][0] , cursor[i+1][1]);
  }
  
  drawSprites();
}

function mouseDragged(){ 
      cursor.push([mouseX, mouseY]);
      console.log(cursor);

  console.log("MOuse pressed");
  
}

function mouseReleased(){

  cursor.push(space);
  console.log("MOuse released");

}