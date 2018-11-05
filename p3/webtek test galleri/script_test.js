var slider_content = document.getElementById("box");
var image = ["1","2","3","4","5","6"];

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
