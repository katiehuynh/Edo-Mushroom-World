class Cloud{
  constructor(){
    this.x = random(0, width);
    this.y = random(height);
    this.zRange = height;
    this.z = random(this.zRange);
    this.valx = random(20);
    this.valy = random(10);
    this.valz = random(30);
    
  }
  
  move(){
    
    this.valx += 0.001;
    this.valy += 0.012;
    this.valz += 0.002;
    
    this.x++;
    if(this.x + 85 > width){
      this.x = -100;
    }
    this.z = noise(this.valz) * this.zRange;

  }
  
  display(){
    push();
    pointLight(242, 101, 32, 0, -200, 0);
    pointLight(random(170,200),random(80,130),random(110,130), -200, 0 , 0)
  
    specularMaterial(242, 101,32);
    translate(this.x - width/2, this.y - height/2, this.z - this.zRange/2);
    noStroke();
    //ambientMaterial();
    scale(random(0.1,0.7));
    model(cloud);
    pop();
  }
}

