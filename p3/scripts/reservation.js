document.getElementById("resContent").style.minHeight = "1400px"


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
//-------------------------------------------------------------------
