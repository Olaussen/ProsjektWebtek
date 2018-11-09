/*--------Language script--------*/
/* Slicer navnet til pathen for å sjekke hvilken fil man er i. Bytter til _eng /_no når funksjonene kjøres. */
function changelang_no_en() {
  if (window.location.pathname.slice(-12) == "bordres.html") {
    window.location.assign(window.location.pathname.slice(0, -12) + "bordres_eng.html");
  }
  if (window.location.pathname.slice(-10) == "about.html") {
    window.location.assign(window.location.pathname.slice(0, -10) + "about_eng.html");
  }
  if (window.location.pathname.slice(-9) == "meny.html") {
    window.location.assign(window.location.pathname.slice(0, -9) + "meny_eng.html");
  }
  if (window.location.pathname.slice(-12) == "galleri.html") {
    window.location.assign(window.location.pathname.slice(0, -12) + "galleri_eng.html");
  }
}

function changelang_en_no() {
  if (window.location.pathname.slice(-16) == "bordres_eng.html") {
    window.location.assign(window.location.pathname.slice(0, -16) + "bordres.html");
  }
  if (window.location.pathname.slice(-14) == "about_eng.html") {
    window.location.assign(window.location.pathname.slice(0, -14) + "about.html");
  }
  if (window.location.pathname.slice(-13) == "meny_eng.html") {
    window.location.assign(window.location.pathname.slice(0, -13) + "meny.html");
  }
  if (window.location.pathname.slice(-16) == "galleri_eng.html") {
    window.location.assign(window.location.pathname.slice(0, -16) + "galleri.html");
  }
}
