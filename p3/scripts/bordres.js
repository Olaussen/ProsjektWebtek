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
if(window.location.pathname.slice(-8) == "eng.html"){i = 1;}
else{i = 0;}
//Funksjon som skriver inn html-kode for navbaren
function createNavbar() {
    document.open("text/html", "replace");
    document.write('<div class="navbar_logo"><img src="images/logo.png" alt="Picture of our logo" id="logo"></div><div class="languageflags"><input type="image" id="noflag" src="images/noflag.png" name="noflag" alt="Norwegian flag" onclick="changelang_en_no()"><input type="image" id="usflag" src="images/usflag.png" name="usflag" alt="USA Flag" onclick="changelang_no_en()"></div><div class="topnav" id="myTopnav"><p id="placeholder"></p><a href='+about_link[i]+' id="om_oss">'+about[i]+'</a><a href='+meny_link[i]+' id="meny">'+menu[i]+'</a><a href='+bordres_link[i]+' id="reserver">'+reservation[i]+'</a><a href='+galleri_link[i]+' id="galleri">'+gallery[i]+'</a><a href="javascript:void(0);" id="menu_link" class="icon" onclick="setIcon()"><img id="menu_icon" src="images/burger-menu-bars.png" alt="Menu icon"></a></div>');
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
let footerText = ['<!-- Footer --><div class="footer"><a href="#wrapper" id="backToTop">Tilbake til toppen</a><div id="btmInfo"><span id="genInfo">The Fancy Pickle | Picklestreet 19 | 7042 Trondheim | </span><span id="tlfInfo">Tlf: 98765432 | </span><span id="infoMail"><a href="mailto:post@tfp.no" target="_top">POST@TFP.NO</a></span></div><p id="jobbInfo">Har du lyst på en jobb hos The Fancy Pickle? Vi er alltid interesserte i gode folk med som verdsetter service! Send oss en søknad med CV og et bilde av deg selv til jobb@tfp.no, eller så kan du sjekke om NAV har noen ledige stillinger <a href="https://tjenester.nav.no/stillinger/stillinger?q=the+fancy+pickle" target="_blank">HER</a></p></div></div>','<!-- Footer --><div class="footer"><a href="#wrapper" id="backToTop">Back to the top</a><div id="btmInfo"><span id="genInfo">The Fancy Pickle | Picklestreet 19 | 7042 Trondheim | </span><span id="tlfInfo">Phone:+47 98765432 | </span><span id="infoMail"><a href="mailto:post@tfp.no" target="_top">POST@TFP.NO</a></span></div><p id="jobbInfo">Do you want to work at The Fancy Pickle? We are always service-oriented persons! Send us an application with a CV and a picture of yourself to jobb@tfp.no, or you can check if NAV has some advertised jobs <a href="https://tjenester.nav.no/stillinger/stillinger?q=the+fancy+pickle" target="_blank">HERE</a></p></div>'];


function createFooter() {
    document.open("text/html", "replace");
    document.write(footerText[i]);
    document.close();
}
createFooter();

// -------------------------------

document.getElementById("resContent").style.minHeight = "500px"

//---------------Reservation form ---------------
 /* Open or close reservation form*/
 function openForm() {
  document.getElementById("myRes").style.display = "block";
}
function closeForm() {
  document.getElementById("myRes").style.display = "none";
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
//-------------------------------------------------------------------

/*--------Language script--------*/
function changelang_no_en(){
  if(window.location.pathname.slice(-12) == "bordres.html"){
    window.location.assign(window.location.pathname.slice(0, -12) + "bordres_eng.html");
  }
  if(window.location.pathname.slice(-10) == "about.html"){
    window.location.assign(window.location.pathname.slice(0, -10) + "about_eng.html");
  }
  if(window.location.pathname.slice(-9) == "meny.html"){
    window.location.assign(window.location.pathname.slice(0, -9) + "meny_eng.html");
  }
  if(window.location.pathname.slice(-12) == "galleri.html"){
    window.location.assign(window.location.pathname.slice(0, -12) + "galleri_eng.html");
  }
}
function changelang_en_no(){
  if(window.location.pathname.slice(-16) == "bordres_eng.html"){
    window.location.assign(window.location.pathname.slice(0, -16) + "bordres.html");
  }
  if(window.location.pathname.slice(-14) == "about_eng.html"){
    window.location.assign(window.location.pathname.slice(0, -14) + "about.html");
  }
  if(window.location.pathname.slice(-13) == "meny_eng.html"){
    window.location.assign(window.location.pathname.slice(0, -13) + "meny.html");
  }
  if(window.location.pathname.slice(-16) == "galleri_eng.html"){
    window.location.assign(window.location.pathname.slice(0, -16) + "galleri.html");
  }
}
