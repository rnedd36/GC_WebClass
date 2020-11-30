
// Add more ids to the image array to increase the number of pictures
const images = [
  {
    id: 1,
    img_url:"url(img/times-square.jpg)",
    alt:"",
    text:"Times&nbspSquare"
  },
  {
    id: 2,
    img_url:"url('img/broadway.jpg')",
    alt:"",
    text:"Broadway"
  },
  {
    id: 3,
    img_url:"url('img/brooklynbridge.jpg')",
    alt:"",
    text:"Brooklyn&nbspBridge"
  },
  {
    id: 4,
    img_url:"url('img/statueliberty.jpg')",
    alt:"",
    text:"Statue&nbspof&nbspLiberty"
  },
  {
    id: 5,
    img_url:"url('img/chinatown.jpg')",
    alt:"",
    text:"Chinatown"
  }
];
// The JavaScript Code starts below. Edit carefully or Not At All!!!!

// set starting item

let currentImage = 0;
let runFile;
let num = 1;
const img = document.querySelector("#imgSrc");
const txt = document.querySelector("#piclabelText");
const id_num = document.querySelector("#picText");

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPic();
});

function showPic(num){
  currentImage = checkCount(currentImage);
  const image = images[currentImage];

  img.style.backgroundImage = image.img_url;
  img.alt = image.alt;
  id_num.innerHTML = image.id;
  txt.innerHTML= image.text;

  if(num === -1){
    stopShowPic();
    currentImage--;
  }else{
    stopShowPic();
    currentImage++;
  }
  runFile = setTimeout("disappear()", 8000);
}
function checkCount(currentCount){

  if (currentImage > images.length - 1) { currentCount = 0;}
	if (currentImage < 0) {currentCount = images.length - 1;}

	return currentCount;

}
function stopShowPic(){
  clearTimeout(runFile);
}
function disappear(){
  img.classList.add("disappear");
  img.classList.remove("reappear");
  setTimeout("reappear()", 8000);
}
function reappear(){
  img.classList.add("reappear");
  img.classList.remove("disappear");
  setTimeout("showPic(1)", 1000);
}
