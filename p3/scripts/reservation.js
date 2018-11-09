/*Because of some lack of content (text) on this page, we had to make the height of
the website 100vh for the footer to stay at the bottom */
document.getElementById("resContent").style.minHeight = "100vh";

//---------------Reservation form ---------------
/* Open or close reservation form*/
function openForm() {
  document.getElementById("myRes").style.display = "block";
}

function closeForm() {
  document.getElementById("myRes").style.display = "none";
}
/* Set min date to today + 1*/
var today = new Date();
var dd = today.getDate() + 1;
var mm = today.getMonth() + 1;
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

/*Reserve button messages*/

function alert_en() {
  window.alert("Your reserveration has been regisered. \nYou will recieve a confirmation message on the given phone number.");
}

function alert_no() {
  window.alert("Din reservasjon har blitt registrert. \nDu vil motta en bekreftelsesmelding på det gitte telefonnummeret.");
}
//-------------------------------------------------------------------
