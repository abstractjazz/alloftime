// const { Body } = require("matter");

// const deviceType = () => {
//   const ua = navigator.userAgent;
//   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
//       return "tablet";
//   }
//   else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
//       return "mobile";
//   }
//   return "desktop";
// };

// const canvas = document.getElementById('#defaultCanvas0')
// const mobileMessage=document.getElementById('#mobile-message')


// if (deviceType() == "tablet" || deviceType() == "mobile") {
//   canvas.remove()
//   document.body.style.style.backgroundColor="black"
//   mobileMessage.style.display="block"
// }



var boxSz = 2400;
var numSpheres = 3000;
let numPlanets = 11;
//declare empty arrays for x,y,z positions
var x = [];
var y = [];
var z = [];
let myFont;
let randomColorVal;
let from;
let to;
let interA;
let song;
pointX = 0;
pointY = 0;
let songVal;
let colorStartR;
let colorStartG;
let colorStartB;
let s;
let colorGauge;
// const space=select('.p5Canvas')




function preload(){
  
  myFont=loadFont('./RadioCanada.ttf')
  song=loadSound('https://ik.imagekit.io/a9ltbtydo/sizzle-video/xylophone.mp3')
}




function setup() {

frameRate(60)
 const canvas=createCanvas(windowWidth, windowHeight, WEBGL);
 canvas.mousePressed=(userStartAudio())
  background(0);
  song.loop()
  randomColorVal = Math.random()*255
  to=color(237, 181, 252)
  from=color(0, 67, 255)
  interA = lerpColor(from, to, 3);
  colorStartR=19
  colorStartG=105
  colorStartB=211
  

  for (var i = 0; i < numSpheres; i++) {
    //assigns random value to positions 0 - end of numSpheres length (in this case 3000)
    x[i] = random(-boxSz, boxSz);
    y[i] = random(-boxSz, boxSz);
    z[i] = random(-boxSz, boxSz);
  }

  textFont(myFont)
  textSize(36)
  textAlign(CENTER,CENTER)
}

function draw() {
  // canvas.onclick=function(){colorChange}
  let volume = map(height-mouseY, 0, width, 0, 1);
  background(0)
  song.amp(volume)
 
  orbitControl(2.5,2.5,0.009)
  stroke(255);

  stroke('#fff')
  strokeWeight(1)
  point(pointX*random, pointY*random())
 
  //back
  

  for (var i = 0; i < numSpheres; i++) {
    //push and pop are used together to save & then restore styles
    push();
    //translate displaces the x,y,z positions of points (creating depth of star effect
    translate(x[i], y[i], z[i])
    stroke(random()*255, random()*255, random()*255)
    strokeWeight(0.75)
    point(boxSz / 50, 8);
    pop();
  }


  for (let j=0; j < numPlanets; j++ ) { 
  // stroke('#fff')
  noStroke()
  strokeWeight(0.25)
  
  fill(`rgba(${colorStartR}, ${colorStartG}, ${colorStartB},0.15)`)
  
  rotateY(frameCount * 0.0001);
  sphere(boxSz/5, mouseY)
  sphere(boxSz/15, mouseX)
  sphere(boxSz/10, 8)
  sphere(boxSz/8, 8)
  sphere(boxSz/44, mouseX)
  sphere(boxSz/38, 8)
  sphere(boxSz/24, 8)
  sphere(boxSz/50, mouseY)
  sphere(boxSz/120, mouseX)
  sphere(boxSz/70, 8)
  }

  fill(interA)
  text('Who Are You In All Of Time?', windowWidth/2, windowHeight/2.25)
 

}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}



function colorChange() {
  colorStartR+=random()*120
  colorStartG+=random()*120
  colorStartB+=random()*120
}

