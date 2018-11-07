//---------- NAVBAR ----------

//Knappenavn på navbar. i=0 for norsk, i=1 for engelsk
let about = ['Om oss','About'];
let menu = ['Meny','Menu'];
let reservation = ['Reserver','Reservation'];
let gallery = ['Galleri','Gallery'];
let about_link = ['about.html','about_eng.html'];
let meny_link = ['meny.html','meny_eng.html'];
let bordres_link = ['bordres.html','bordres_eng.html'];
let galleri_link = ['galleri.html','galleri_eng.html'];
i=0;

//Funksjon som skriver inn html-kode for navbaren
function createNavbar() {
    document.open("text/html", "replace");
    document.write('<div class="navbar_logo"><img src="images/logo.png" alt="Picture of our logo" id="logo"></div><div class="topnav" id="myTopnav"><p id="placeholder"></p><a href='+about_link[i]+' id="om_oss">'+about[i]+'</a><a href='+meny_link[i]+' id="meny">'+menu[i]+'</a><a href='+bordres_link[i]+' id="reserver">'+reservation[i]+'</a><a href='+galleri_link[i]+' id="galleri">'+gallery[i]+'</a><a href="javascript:void(0);" id="menu_link" class="icon" onclick="setIcon()"><img id="menu_icon" src="images/burger-menu-bars.png" alt="Menu icon"></a></div>');
    document.close();
}
createNavbar();

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

//---------- FOOTER ----------
let footerText = ['<!-- Footer --><div class="footer"><a href="galleriWrapper" id="backToTop">Tilbake til toppen</a><div id="btmInfo"><span id="genInfo">The Fancy Pickle | Picklestreet 19 | 7042 Trondheim | </span><span id="tlfInfo">Tlf: 98765432 | </span><span id="infoMail"><a href="mailto:post@tfp.no" target="_top">POST@TFP.NO</a></span></div><p id="jobbInfo">Har du lyst på en jobb hos The Fancy Pickle? Vi er alltid interesserte i gode folk med som verdsetter service! Send oss en søknad med CV og et bilde av deg selv til jobb@tfp.no, eller så kan du sjekke om NAV har noen ledige stillinger <a href="https://tjenester.nav.no/stillinger/stillinger?q=the+fancy+pickle" target="_blank">HER</a></p></div></div>','<!-- Footer --><div class="footer"><a href="#galleriWrapper" id="backToTop">Back to the top</a><div id="btmInfo"><span id="genInfo">The Fancy Pickle | Picklestreet 19 | 7042 Trondheim | </span><span id="tlfInfo">Phone:+47 98765432 | </span><span id="infoMail"><a href="mailto:post@tfp.no" target="_top">POST@TFP.NO</a></span></div><p id="jobbInfo">Do you want to work at The Fancy Pickle? We are always service-oriented persons! Send us an application with a CV and a picture of yourself to jobb@tfp.no, or you can check if NAV has some advertised jobs <a href="https://tjenester.nav.no/stillinger/stillinger?q=the+fancy+pickle" target="_blank">HERE</a></p></div>'];
i = 0;

function createFooter() {
    document.open("text/html", "replace");
    document.write(footerText[i]);
    document.close();
}
createFooter();

// -------------------------------


//----------------------------
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
