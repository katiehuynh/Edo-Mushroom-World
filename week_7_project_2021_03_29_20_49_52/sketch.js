// Katie Huynh mushroom world
// Links and references on references.js

let temple, templeSkin, liyue;
let cloud, kudasai, mushroom;
let mountain, sunset, sun;
let cloudeu = [];
let balls = [];
let cloudNum = 10; 
let angle = 0;
let mushX, mushY;
let speedX, speedY;
let myCanvas;

function preload(){
  temple = loadModel('assets/temple.obj');
  templeSkin = loadImage('assets/templeskin.jpg');
  liyue = loadImage('assets/liyuee.png');
  cloud = loadModel('assets/cloud.obj');
  kudasai = loadSound('assets/kudasai.mp3');
  mushroom = loadModel('assets/mushy.obj');
  mountain = loadModel('assets/mountain.obj');
  sunset = loadImage('assets/sunset.png');
  sun = loadImage('assets/sunset.jpg');
}

function setup() {
  let canvasW = 600;
  let canvasH = 400;
  myCanvas = createCanvas(canvasW, canvasH, WEBGL);
  myCanvas.position((windowWidth-canvasW)/2,(windowHeight-canvasH)/2);
  
  //createCanvas(600, 400, WEBGL);
  angleMode(DEGREES);
  
  mushX = -24;
  mushY = 4;
  speedX = 0.04;
  speedY = 0.02;
  
  
  for(let i  =0; i < cloudNum; i++){
    cloudeu.push(new Cloud());
  }
  
  for(let i  =0; i < cloudNum; i++){
    balls.push(new Ball());
  }
  
  kudasai.loop();
}

function draw() {
  let dirY = (mouseY / height - 0.5) *2;
  let dirX = (mouseX / width - 0.5) *2;
  directionalLight(250, 250, 250, dirX, -dirY, 0.25);
  
  
  background(random(248,255),random(225,230),random(110,115));
 //image(liyue, -400,-340, 1100,600);
  image(sun, -450,-450);

  
  //mountain
  mountainn(-170,80, 50, 145,-30, 0.2);
  mountainn(-120,96, 70, 125,-30, 0.3);
  //mountainn(120,90, 50, 75,0, 0.2);
  mountainn(40,90, 30, 200,-30, 0.2);
  //mountainn(-135,45, 3, 60,0, 0.3);
  //mountainn(90,80, 4, 78,0, 0.3);
  
  
  //balls
  push();
  for(let i = 0; i < cloudNum; i++){
    balls[i].move();
    balls[i].display();
  }
  pop();
  
  //clouds
  push();
  for(let i = 0; i < cloudNum; i++){
    cloudeu[i].move();
    cloudeu[i].display();
  }
  pop();
  
  
  // temple upper left flooring
  push();
  pointLight(196,90,91, mouseX, mouseY, 0);
  translate(-210,0,0);
  rotateX(95);
  rotateY(7);
  rotateZ(-65);
  noStroke();
  box(200,70,20);
  pop();
  
  push(); pointLight(random(170,200),random(80,130),random(110,130), 0, -200 , 0)
  pointLight(random(170,200),random(80,130),random(110,130), -200, 0 , 0)
    //pointLight(random(160,210),random(40,80),random(30,45), -200, 0 , 0)
  specularMaterial(253, random(230,240), random(90,110));
  translate(-250,-20,0);
  rotate(-180);
  rotateX(random(0,1));
  rotateZ(9);
  texture(templeSkin);
  noStroke();
  scale(8);
  model(temple);
  angle += 0.5;
  pop();
  
  /*//temple upper leftleft behind
  push(); pointLight(random(170,200),random(80,130),random(110,130), 0, -200 , 0)
  pointLight(random(170,200),random(80,130),random(110,130), -200, 0 , 0)
    //pointLight(random(160,210),random(40,80),random(30,45), -200, 0 , 0)
  specularMaterial(253, random(230,240), random(90,110));
  translate(-200,-10,0);
  rotate(-180);
  rotateX(random(0,1));
  rotateZ(9);
  texture(templeSkin);
  noStroke();
  scale(6);
  model(temple);
  angle += 0.5;
  pop();*/
  

  //bridge
  push();
  bridge(-180,9);
  pop();

  push();
  bridge(-180,9);
  pop();
  
  push();
  bridge(-160, 25);
  pop();
  
  push();
  bridge(-140, 41);
  pop();
  
  push();
  bridge(-120, 57);
  pop();
  
  push();
  bridge(-100, 73);
  pop();
  
  push();
  bridge(-80, 89);
  pop();
  
  mountainn(200,6, 56, 0,0, 3);
  mountainn(170,200, 61, 0,0, 3);
  
  push();
  bridge(-60, 105);
  pop();
  
  push();
  bridge(-40, 121);
  pop();
  
  push();
  bridge(-20, 137);
  pop();
  
  push();
  bridge(0, 153);
  pop();
  
  push();
  bridge(20, 169);
  pop();
  
  push();
  bridge(45, 185);
  pop();
  
  
  //mushroom hopping
  push();
  //pointLight(0,200,10, mouseX, mouseY, 0);
  normalMaterial();
  //translate(-250,-20,0);
  scale(7);
  noStroke();
  rotateX(20);
  rotateY(40);
  rotate(-180);
  mushX = mushX + speedX ;
  mushY = mushY + speedY;
  if(mushX === 0){
    translate(-mushX + 10, -mushY);
  } 
  else{
    translate(-mushX, -mushY);
  }
  
  //if mushroom goes offscreen
  if(mushX >= 21){
    mushX = -24;
    mushY = 4;
  }

  model(mushroom);
  pop();
  
  /*// temple bottom right behind
  push();
  //pointLight(196,90,91, mouseX, mouseY, 0);
  translate(170,150,0);
  rotate(-180);
  //rotateX(random(0,1));
  rotateZ(-2);
  texture(templeSkin);
  noStroke();
  scale(13);
  model(temple);
  angle += 0.5;
  pop();*/
  
  // temple bottom right
  push();
  pointLight(196,90,91, mouseX, mouseY, 0);
  translate(200,150,0);
  rotate(-180);
  rotateX(random(0,1));
  rotateZ(9);
  texture(templeSkin);
  noStroke();
  scale(15);
  model(temple);
  angle += 0.5;
  pop();
  
  
}

function bridge(x,y){
  //pointLight(255,161,179, mouseX, mouseY, 1);
  pointLight(242, 101, 32, 0, -200, 0);
    pointLight(random(170,200),random(80,130),random(110,130), -200, 0 , 0)
  specularMaterial(242, 101,32);
  noStroke();
  translate(x,y);
  rotateX(75);
  rotateY(0.1*angle);
  //rotateY()
  rotateZ(-65);
  box(-45);
  angle += 0.3;
}

function mountainn(x, y, rx, ry,rz, s){
  //mountain
  push();
  pointLight(242, 101, 32, 0, -200, 0); 
      pointLight(random(170,200),random(80,130),random(110,130), -200, 0 , 0)
  ambientMaterial(242, 101,32);
  noStroke();
  rotate(-180);
  rotateX(rx);
  rotateY(ry);
  rotateZ(rz);
  translate(x,y);
  scale(s);
  model(mountain);
  pop();
}

function mouseClicked() {
  let dirY = (mouseY / height - 0.5) *2;
  let dirX = (mouseX / width - 0.5) *2;
  directionalLight(155, 42, 97, dirX, -dirY, 0.25);
  directionalLight(2,16,124, dirX, dirY, 0.25)
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 250, 250, 100, 0, 50);
  
  // prevent default
  return false;
}