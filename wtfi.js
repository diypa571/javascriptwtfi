/*
Diyar Parwana
Course WTFI - Lab 3
This is for the first assignment
What I do now? I want to create an array of many messages.
Everytime the page is loaded, every time the script is run,
A random index value will be selected and will be shown on the page.
*/
var witfimatxtmessages = ["FRE FOR ALL", "EASY TO USE", "witfimART", "OPEN FOR ALL","UMEA UNI","StarGate", "StarTrek"];
// I want to select one of the messages from the array randomly
// For that  create a function...
// Why do I create function for it? Maybe becuase I will re use the code for another assignments
// What do I use for selection on of the values from the array? I  will Math.random()
function witfimartfunktion(witfimatxtmessages)
{  return witfimatxtmessages[Math.floor(Math.random()*witfimatxtmessages.length)];  }
// console.log(witfimartfunktion(witfimatxtmessages));
document.getElementById("txtchangelogan").innerHTML = witfimartfunktion(witfimatxtmessages);
//The Math.floor() function returns the largest integer less than or equal to a given number.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor


/*
This is for the second assignment.
In this assignment, to make change opacity automaticly
How do I do that? I use setInterval and a fucntion for increasing
*/

//
let incme4fun = 0;
setInterval(function(){
incme4fun += 1;
if(incme4fun == 1) {
document.getElementById("MakeMeOPacity").style.opacity = "0.4";
}
if(incme4fun == 2) {
document.getElementById("MakeMeOPacity").style.opacity = "0.9";
}
if(incme4fun == 3) {
document.getElementById("MakeMeOPacity").style.opacity = "0.3";
}
if(incme4fun == 3) {
incme4fun =0;
}
}, 1500);


// This function will change the background.
// This will be used for for onclick
function MakeMeGreen(){
document.getElementById("MakeMeOPacity").style.backgroundColor = "green";
}
// This will be used for for onmouseover
function MakeMeBlue(){
document.getElementById("MakeMeOPacity").style.backgroundColor = "blue";
}
// This will be used for onclick to hdie the element  txtchangelogan
function MakeMeHidden(){
document.getElementById("txtchangelogan").style.visibility = "hidden";
}

function MakeMeVisible(){
document.getElementById("txtchangelogan").style.visibility = 'visible';
}


function MakeMeTransParent(){
document.getElementById("footer").style.opacity = "0.1";
}

function MakeMeUnTransParent(){
document.getElementById("footer").style.opacity = "0.9";
}



// MakeMeToogle  Javascript
function myFunctionz() {
var MakeMeToogle = document.getElementById("BackgroundImgID");
if (MakeMeToogle.style.display === "none") {
document.getElementById("ShowOrHide").innerHTML = "HIDE THE INTRO SECTION";
MakeMeToogle.style.display = "block";
} else {
  document.getElementById("ShowOrHide").innerHTML = "SHOW THE INTRO SECTION";
MakeMeToogle.style.display = "none";
} }



function Lab2Menus() {
var mmenu = document.getElementById("LetMeBeMenu");
if (mmenu.style.display === "none") {
mmenu.style.display = "block";
} else {
mmenu.style.display = "none";
} }

// Toogle... with Jquery...
// assignment three A
$(document).ready(function(){
  $("#Tshow").click(function(){
    $("#panel").slideToggle("slow");
  });
});


//Assignment three
// animate()
$(document).ready(function(){
  $(".btnAnimate").click(function(){
    $(".AnimateMe").animate({
      left: '250px',
      height: '150px',
      width: '150px',
      fontSize : '20px',


    });
  });
});






// Uppgift 4 A
function allowDrop(deve) {
deve.preventDefault();
}

function drag(deve) {
deve.dataTransfer.setData("text",deve.target.id);
}

function drop(deve) {
deve.preventDefault();
var data = deve.dataTransfer.getData("text");
if  (data === "doghouse") {
alert(" Thank you for finding and bringin home my  dog!");
console.log("You found my dog... Thank you...");
}
// THis will appened the dog to the green area
deve.target.appendChild(document.getElementById(data));
}

// This is for the Task 4 B.


var c = document.getElementById("UppGiftCanvasUnRotaed");
var c = c.getContext("2d");
c.fillRect(100, 100, 100, 50);

var c = document.getElementById("UppGiftCanvas");
var c = c.getContext("2d");
c.rotate(20 * Math.PI / 90);
c.fillRect(100, -80, 100, 50);

c.rotate(20 * Math.PI / 90);
c.fillRect(120,2,20,20);

function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
x.className += " responsive";
} else {
x.className = "topnav";
} }
