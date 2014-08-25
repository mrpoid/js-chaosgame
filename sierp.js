var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');
canvas.addEventListener('click', begin, false);
var points = [
  [0,400],
  [200,0],
  [400,400],
]

var lastpoint = [0,0];

function begin(e)
{
  if(lastpoint[0] == 0){
     var rect = canvas.getBoundingClientRect();
     var initialx = e.clientX - rect.left;
     var initaly = e.clientY - rect.top;
     drawPoint(initialx, initaly,1000);
   }
   else {
     drawPoint(lastpoint[0],lastpoint[1],1000)
   }
}
function drawTriangle(){
  c.beginPath();
  c.moveTo(0,400);
  c.lineTo(200,0);
  c.lineTo(400,400);
  c.lineTo(0,400);
  c.stroke();
}

function drawPoint(x, y, iii){
  if(iii === 0)
  {
     lastpoint = [x,y];
     return 1;
  }
  c.fillRect(x,y,1,1);
  var vtx = Math.floor(Math.random() * 3);
  window.setTimeout(drawPoint((points[vtx][0]+x)/2,(points[vtx][1]+y)/2,iii-1),1);
}
