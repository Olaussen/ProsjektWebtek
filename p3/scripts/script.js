//---------- NAVBAR ----------

//Knappenavn på navbar. i=0 for norsk, i=1 for engelsk
let about = ['Om oss','About'];
let menu = ['Meny','Menu'];
let reservation = ['Reserver','Reservation'];
let gallery = ['Galleri','Gallery'];
i=0;
//Funksjon som skriver inn html-kode for navbaren
function createNavbar() {
    document.open("text/html", "replace");
    document.write('<div class="navbar_logo"><img src="images/logo.png" alt="Picture of our logo" id="logo"></div><div class="topnav" id="myTopnav"><p id="placeholder"></p><a href="about.html" id="om_oss">'+about[i]+'</a><a href="meny.html" id="meny">'+menu[i]+'</a><a href="bordres.html" id="reserver">'+reservation[i]+'</a><a href="galleri.html" id="galleri">'+gallery[i]+'</a><a href="javascript:void(0);" id="menu_link" class="icon" onclick="setIcon()"><img id="menu_icon" src="images/burger-menu-bars.png" alt="Menu icon"></a></div>');
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
i = 0;

function createFooter() {
    document.open("text/html", "replace");
    document.write(footerText[i]);
    document.close();
}
createFooter();

// -------------------------------
