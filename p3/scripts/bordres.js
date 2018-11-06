//---------- NAVBAR ----------
const logo = document.getElementById('logo');
const site = window.location.href;
const menuButton = document.getElementById('menu_link');
const img = document.getElementById('menu_icon');


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function setIcon() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Changes the menu-bar-image on hover
menuButton.onmouseout = function() {
  img.src = 'images/burger-menu-bars.png';
};
menuButton.onmouseover = function() {
  img.src = 'images/burger-menu-bars-hover.png';
};



//----------------------------

/* Open or close reservation form*/

function openForm() {
  document.getElementById("myRes").style.display = "block";
  document.getElementsByClassName("open-btn").style.display ="none";
}
function closeForm() {
  document.getElementById("myRes").style.display = "none";
  document.getElementsByClassName("open-btn").style.display ="block";
}

/* Set min date to today*/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
today = yyyy + '-' + mm + '-' + dd;
var maxy = yyyy + 1;
var max = maxy + "-" + mm + "-" + dd;
document.getElementById("dateinput").setAttribute("min", today);
document.getElementById("dateinput").setAttribute("value", today);
document.getElementById("dateinput").setAttribute("max", max);

/* Set time */

var now = new Date();
var hrs = now.getHours();
var min = now.getMinutes();
  if (hrs < 10) {
    hrs = "0" + hrs
  }
  if (min < 10) {
    min = "0" + min
  }
now = hrs + ":" + min;
document.getElementById("time").setAttribute("value", now);
