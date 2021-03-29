class Ball{
  constructor(){
    this.x = random(0, width);
    this.y = random(height);
    this.zRange = height;
    this.z = random(this.zRange);
    this.valx = random(20);
    this.valy = random(10);
    this.valz = random(30);
    this.c = color(random(90,240), random(65,140), random(142,235), 200);
    this.size = random(5,15);
  }
  
  move(){
    
    this.valx += 0.001;
    this.valy += 0.012;
    this.valz += 0.002;
    
    this.x = noise(this.valx) * width;
    this.y = noise(this.valy)*height;
    this.z = noise(this.valz) * this.zRange;

  }
  
  display(){
    push();
    pointLight(225, 100, 35, -200, 0 , 0)
  
    specularMaterial(242, 101,32);
    translate(this.x-width/2, this.y-height/2, this.z - this.zRange/2);
    fill(this.c);
    noStroke();
    sphere(this.size);
    pop();
  }
}