//---------- NAVBAR ----------
const logo = document.getElementById('logo');
const site = window.location.href;


/*
logo.addEventListener('click', () => {
  //Sjekker hvilken side man er på. Byttes til "folk.ntnu...osv"
  if (site !== 'index.html') {
    console.log('Du føres til siden index.html') //Endrer til at man føres til index.html
  }
})
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//----------------------------
