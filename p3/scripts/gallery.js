//-------------GALLERY---------------
var slider_content = document.getElementById("box");// variabel som bruker div med id="box"og her skal blidene vises.
var image = ["images/1", "images/2", "images/3", "images/4", "images/5", "images/6"];
//array med navn på bildene som skal bli vist.

var i = image.length; //setter i til å være lik lengden av array
var tid = setInterval(nextImage, 3000); // varibal tid som vil starte funksjonen nextImage hver 3. sekund
var currentPic = document.createElement("input"); // en input element i html og her skal bildenummeret vises.
currentPic.setAttribute("id", "numbertext"); // setter id på den slik at den kan styles i css.
currentPic.setAttribute("readonly", "readonly");
currentPic.setAttribute("value", (i - image.length+1) + "/" + i);// her blir d satt bildenummeret, +1 fordi i-image.length vil gi 0 når gallerisiden først åpnes
slider_content.appendChild(currentPic); // nå blir numbertext puttet inn i div med id="box".

function thisImage(k) {
  i = k; // når et av bildene under galleriet blir trykket på vil i=k gjøre
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>"; //går direkte på html og endre hva som står i img taggen. i-1 fordi array starter på 0
  currentPic.setAttribute("value", i + "/" + image.length);//setter ny verdi på bildetelleren i galleriet.
  slider_content.appendChild(currentPic);

  clearInterval(tid); //resetter timereen slik at det blir 3 nye sekund
  tid = setInterval(nextImage, 3000);
}

//funksjon som skjer når du trykker på neste knappen i bildegalleriet.
function nextImage() {
  if (i < image.length) {
    i = i + 1;   //hvis i er mindre enn lengden på arrayen så legger den til 1.
  } else {
    i = 1; //hvis ikke så starter telleren på nytt.

  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>"; //går direkte på html og endre hva som står i img taggen. i-1 fordi array starter på 0
  currentPic.setAttribute("value", i + "/" + image.length);//setter ny verdi på bildetelleren i galleriet.
  slider_content.appendChild(currentPic);

  clearInterval(tid); //resetter timereen slik at det blir 3 nye sekund
  tid = setInterval(nextImage, 3000);
}
//funksjon som skjer når du trykker på tilbake knappen i galleriet.
function prevImage() {
  if (i > 1) {
    i = i - 1; //hvis i er større en 1 skal den trekkes tilbake
  } else {
    i = image.length; //hvis i er 0 så endres tilbake til 6
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ".jpg>";//går direkte på html og endre hva som står i img taggen. i-1 fordi array starter på 0
  clearInterval(tid); //resetter timereen slik at det blir 3 nye sekund
  tid = setInterval(nextImage, 3000);
  currentPic.setAttribute("value", i + "/" + image.length);//setter ny verdi på bildetelleren.
  slider_content.appendChild(currentPic);
}
// inspirasjon fra  video https://www.youtube.com/watch?v=sQuniQCzNlY av Web Zone.
