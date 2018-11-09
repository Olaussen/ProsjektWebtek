//---------- NAVBAR ----------

//Knappenavn på navbar. i=0 for norsk, i=1 for engelsk
let about = ['Om oss', 'About'];
let menu = ['Meny', 'Menu'];
let reservation = ['Reserver', 'Reservation'];
let gallery = ['Galleri', 'Gallery'];
let about_link = ['about.html', 'about_eng.html'];
let meny_link = ['meny.html', 'meny_eng.html'];
let bordres_link = ['bordres.html', 'bordres_eng.html'];
let galleri_link = ['galleri.html', 'galleri_eng.html'];
//Sjekker om man er på engelsk eller norsk side. i bestemmes ut i fra dette
if (window.location.pathname.slice(-8) == "eng.html") {
  i = 1;
} else {
  i = 0;
}

//Funksjon som skriver inn html-kode for navbaren. Modularitet
function createNavbar() {
  document.open("text/html", "replace");
  document.write('<div class="navbar_logo"><img src="images/logo.png" alt="Picture of our logo" id="logo"></div><div class="languageflags"><input type="image" id="noflag" src="images/noflag.png" name="noflag" alt="Norwegian flag" onclick="changelang_en_no()"><input type="image" id="usflag" src="images/usflag.png" name="usflag" alt="USA Flag" onclick="changelang_no_en()"></div><div class="topnav" id="myTopnav"><p id="placeholder"></p><a href=' + about_link[i] + ' id="om_oss">' + about[i] + '</a><a href=' + meny_link[i] + ' id="meny">' + menu[i] + '</a><a href=' + bordres_link[i] + ' id="reserver">' + reservation[i] + '</a><a href=' + galleri_link[i] + ' id="galleri">' + gallery[i] + '</a><a href="javascript:void(0);" id="menu_link" class="icon" onclick="setIcon()"><img id="menu_icon" src="images/burger-menu-bars.png" alt="Menu icon"></a></div>');
  document.close();
}
createNavbar();

//Deklarerer konstanter for bildet av meny-knappen(burger)
const menuButton = document.getElementById('menu_link');
const img = document.getElementById('menu_icon');


/* Bytter mellom å legge og ta bort til "responsive" klassen til topnav når brukeren klikker på iconet */
function setIcon() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Bytter meny-bar-bildet når man drar musa over. (svart bakgrunn = hvitt bilde og hvit bakgrunn = svart bilde)
menuButton.onmouseout = function() {
  img.src = 'images/burger-menu-bars.png';
};
menuButton.onmouseover = function() {
  img.src = 'images/burger-menu-bars-hover.png';
};
//---------------------------------------------------


//---------- FOOTER ----------
//Deklarerer en variabel for footeren i html-kode.
let footerText = ['<!-- Footer --><div class="footer"><a href="#top" id="backToTop">Tilbake til toppen</a><div id="btmInfo"><span id="genInfo">The Fancy Pickle | Picklestreet 19 | 7042 Trondheim | </span><span id="tlfInfo">Tlf: 98765432 | </span><span id="infoMail"><a href="mailto:post@tfp.no" target="_top">POST@TFP.NO</a></span></div><p id="jobbInfo">Har du lyst på en jobb hos The Fancy Pickle? Vi er alltid interesserte i gode folk med som verdsetter service! Send oss en søknad med CV og et bilde av deg selv til jobb@tfp.no, eller så kan du sjekke om NAV har noen ledige stillinger <a href="https://tjenester.nav.no/stillinger/stillinger?q=the+fancy+pickle" target="_blank">HER</a></p></div></div>', '<!-- Footer --><div class="footer"><a href="#top" id="backToTop">Back to the top</a><div id="btmInfo"><span id="genInfo">The Fancy Pickle | Picklestreet 19 | 7042 Trondheim | </span><span id="tlfInfo">Phone:+47 98765432 | </span><span id="infoMail"><a href="mailto:post@tfp.no" target="_top">POST@TFP.NO</a></span></div><p id="jobbInfo">Do you want to work at The Fancy Pickle? We are always service-oriented people! Send us an application with a CV and a picture of yourself to jobb@tfp.no, or you can check if NAV has some advertised jobs <a href="https://tjenester.nav.no/stillinger/stillinger?q=the+fancy+pickle" target="_blank">HERE</a></p></div>'];
//footerText[0] = norsk og footerText[1] = engelsk

//Skriver så inn denne footer-variabelen inn i html-dokumentet
function createFooter() {
  document.open("text/html", "replace");
  document.write(footerText[i]);
  document.close();
}
createFooter();

// -------------------------------
