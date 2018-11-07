
//skriver footer dirkete inn på html dokument
document.write("<div class='footer'><a href='#galleriWrapper' id='backToTop'>Tilbake til toppen</a><div id='btmInfo'><span id='genInfo'>The Fancy Pickle, Picklestreet 19, 7042 Trondheim</span><span id='tlfInfo'>Tlf: 98765432</span><span id='infoMail'><a href='mailto:post@tfp.no' target='_top'>POST@TFP.NO</a></span></div><p id='jobbInfo'>Har du lyst på en jobb hos The Fancy Pickle? Vi er alltid interesserte i gode folk med som verdsetter service!Send oss en søknad med CV og et bilde av deg selv til jobb@tfp.no, eller så kan du sjekke om NAV har noen ledige stillinger <a href='https://tjenester.nav.no/stillinger/stillinger?q=the+fancy+pickle' target='_blank'>HER</a></p></div>");


//skriver navbar direkte inn på html dokument
document.write("<div id='navWrapper'><div class='navbar_logo'><img src='images/logo.png' alt='Picture of our logo' id='logo'></div><div class='topnav' id='myTopnav'><p id='placeholder'></p><a href='about.html' id='om_oss'>Om oss</a><a href='meny.html' id='meny'>Meny</a><a href='bordres.html' id='reserver'>Reserver</a><a href='galleri.html' id='galleri'>Galleri</a><a href='javascript:void(0);' id='menu_link' class='icon' onclick='setIcon()'><img id='menu_icon' src='images/burger-menu-bars.png' alt='Menu icon'></a></div></div>");


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
