var slider_content = document.getElementById("box");
var image = ["images/1","images/2","images/3","images/4","images/5","images/6"];

var i = image.length;
var lol = setInterval(nextImage ,3000);
var nedreGalleri = document.getElementsByClassName("Galleri")
var currentPic = document.createElement("input");
currentPic.setAttribute("id","numbertext");
currentPic.setAttribute("readonly","readonly");
currentPic.setAttribute("value",(i-image.length+1)+"/"+i);
slider_content.appendChild(currentPic);

function thisImage(k){
  i = k;
  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
  currentPic.setAttribute("value",i+"/"+image.length);
  slider_content.appendChild(currentPic);

      clearInterval(lol);
      lol = setInterval(nextImage,3000);
}


function nextImage(){
  if (i<image.length){
    i = i+1;
  }
  else{
    i=1;

  }
  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
  currentPic.setAttribute("value",i+"/"+image.length);
  slider_content.appendChild(currentPic);

      clearInterval(lol);
      lol = setInterval(nextImage,3000);
}

function prevImage(){
  if (i>1){
    i = i-1;
  }
  else{
    i= image.length;
  }
  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
  clearInterval(lol);
  lol = setInterval(nextImage,3000);
  currentPic.setAttribute("value",i+"/"+image.length);
  slider_content.appendChild(currentPic);
}

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
