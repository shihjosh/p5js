var colorsBlue = "04080f-507dbc-a1c6ea-bbd1ea-dae3e5".split("-").map(a=>"#"+a)
function planet(x,y,r=30){
  push()
    translate(x,y)
    for(var i=0;i<200;i++){
      // fill(random(colorsBlue))
      // let cc = random(colorsBlue)
      let cc = colorsBlue[int(noise(frameCount/10,i)*colorsBlue.length)%colorsBlue.length]
      fill(cc)
      
      drawingContext.shadowColor = color(cc);
      drawingContext.shadowBlur = 30;
      let xx = noise(i*2,frameCount/100)*r
      let ang = noise(i,frameCount/500,500)*4*PI
      let rr = noise(i,500,frameCount/50)*30
      // let rr =random(0,20)
      // ellipse(random(r), random(r), rr)
      ellipse(xx*cos(ang), xx*sin(ang), rr)
    }
  pop()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(800, 800);
  background(0);
  // rect(0,0,width,height)
  blendMode(SCREEN)
  planet(width/2,height/2,100)
}

function draw() {
  blendMode(BLEND)
  background(colorsBlue[0])
  blendMode(SCREEN)
  planet(width/2,height/2,400)
}
