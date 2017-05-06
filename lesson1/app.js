console.log("working");

// First Shape

var c = document.getElementById("one");
var ctx = c.getContext("2d");
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(100, 100, 100, 100);
ctx.strokeStyle = "rgb(0,0,0)";
ctx.strokeRect(80,80,140,140);
ctx.clearRect(120,120,60,60);

// Second Shape

var c2 = document.getElementById("two");
var c2tx = c2.getContext("2d");
c2tx.fillStyle = "rgb(0,0,0)";
c2tx.fillRect(0,0,150,150);
c2tx.fillRect(150,150,300,300);

// Third Shape

var c3 = document.getElementById("three");
var c3tx = c3.getContext("2d");
c3tx.fillStyle = "rgb(0,0,0)";
c3tx.fillRect(0,0,300,300);
c3tx.clearRect(20,20,120,120);
c3tx.clearRect(160,20,120,120);
c3tx.clearRect(20,160,120,120);
c3tx.clearRect(160,160,120,120);

// Fourth Shape

var c4 = document.getElementById("four");
var c4tx = c4.getContext("2d");
c4tx.fillStyle = "rgb(0,0,0)";
c4tx.fillRect(0,0,100,100);
c4tx.fillRect(200,0,100,100);
c4tx.fillRect(100,100,100,100);
c4tx.fillRect(0,200,100,100);
c4tx.fillRect(200,200,100,100);

// Fifth Shape

var x = 0;
var w = 300;
var c5 = document.getElementById("five");
var c5tx = c5.getContext("2d");
c5tx.fillStyle = "rgb(0,0,0)";
c5tx.fillRect(140, 140, 20, 20);
c5tx.strokeStyle = "rgb(0,0,0)";
c5tx.lineWidth = 10;

for (var i = 0; i < 7; i++) {

	
	c5tx.strokeRect(x,x,w,w);
	w = w-40;
	x = x+20;

}

// Sixth Shape

var c6 = document.getElementById("six");
var c6tx = c6.getContext("2d");
c6tx.beginPath();
c6tx.strokeStyle = "black";
c6tx.moveTo(75,0);
c6tx.lineTo(150,100);
c6tx.lineTo(75,200);
c6tx.lineTo(0,100);
c6tx.closePath();
c6tx.stroke();
c6tx.fillStyle = "black";
c6tx.fill();

// Seventh Shape

var c7 = document.getElementById("seven");
var c7tx = c7.getContext("2d");
c7tx.beginPath();
c7tx.strokeStyle = "black";
c7tx.moveTo(0,0);
c7tx.lineTo(150,150);
c7tx.lineTo(0,300);
c7tx.closePath();
c7tx.stroke();
c7tx.fillStyle = "black";
c7tx.fill();
c7tx.beginPath();
c7tx.strokeStyle = "black";
c7tx.moveTo(300,0);
c7tx.lineTo(150,150);
c7tx.lineTo(300,300);
c7tx.closePath();
c7tx.stroke();
c7tx.fillStyle = "black";
c7tx.fill();


// 8th Shape

var c8 = document.getElementById("eight");
var c8tx = c8.getContext("2d");
c8tx.beginPath();
c8tx.strokeStyle = "black";
c8tx.moveTo(0,0);
c8tx.lineTo(150,150);
c8tx.lineTo(0,150);
c8tx.closePath();
c8tx.stroke();
c8tx.fillStyle = "black";
c8tx.fill();

c8tx.beginPath();
c8tx.strokeStyle = "black";
c8tx.moveTo(150,0);
c8tx.lineTo(150,150);
c8tx.lineTo(300,0);
c8tx.closePath();
c8tx.stroke();
c8tx.fillStyle = "black";
c8tx.fill();

c8tx.beginPath();
c8tx.strokeStyle = "black";
c8tx.moveTo(300,150);
c8tx.lineTo(150,150);
c8tx.lineTo(300,300);
c8tx.closePath();
c8tx.stroke();
c8tx.fillStyle = "black";
c8tx.fill();

c8tx.beginPath();
c8tx.strokeStyle = "black";
c8tx.moveTo(0,300);
c8tx.lineTo(150,150);
c8tx.lineTo(150,300);
c8tx.closePath();
c8tx.stroke();
c8tx.fillStyle = "black";
c8tx.fill();


//Ninth Shape

var c9 =document.getElementById("nine");
var c9tx=c9.getContext("2d");
c9tx.beginPath();
c9tx.arc(150,150,50,0,2*Math.PI);
c9tx.stroke();
c9tx.fillStyle = "black";
c9tx.fill();























