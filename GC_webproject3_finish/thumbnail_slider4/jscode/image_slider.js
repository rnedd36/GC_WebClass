var imgCountArray = [1,1];
var imgArray = ["imgSlide1", "imgThumb1"];


function check_move(move, length){
	if (move >= length) { move = 0;}
	if (move < 0) {move = length - 1;}
	return move;


}
function display_files(displayNumber, length){
	if (displayNumber > length) { displayNumber = 1;}
	if (displayNumber <= 0) {displayNumber = length - 1;}
	
	return displayNumber;

}


function plusDivs(move, arrayNumber){
	showDivs(imgCountArray[arrayNumber] += move, arrayNumber);
}

function plusThumbs(move, arrayNumber){
	showThumbs(imgCountArray[arrayNumber] += move, arrayNumber);
}


function showDivs(move, arrayNumber){

	var loop;
	var pics = document.getElementsByClassName(imgArray[arrayNumber]);
	
	move = check_move(move,  pics.length);

	var displayNumber = move + 1;
	for(loop = 0; loop < pics.length; loop++){
		pics[loop].className = pics[loop].className.replace(" show_me","")
	
	}
	 pics[move].className += " show_me";
	 imgCountArray[arrayNumber] = move;
	 document.getElementById("piclabel").innerHTML = "Picture " + displayNumber + " of " + pics.length ;
}


function showThumbs(move, arrayNumber){
	var loop;
	var pics = document.getElementsByClassName(imgArray[arrayNumber]);
	
	
	for(loop = 0; loop < pics.length; loop++){
		move = display_files(move,  pics.length);
		pics[loop].src = pics[loop].src.replace(/\d+.jpg/,move+'.jpg');
		if (loop == 0){ imgCountArray[arrayNumber] = move;}
		move++;

	}
}

function showPic(imgNumber, arrayNumber, arrayNumber2, dir){
	var pics = document.getElementsByClassName(imgArray[arrayNumber]);
	var pic_src = pics[imgNumber].src;
	str_lookup = /\d+.jpg/;

	pic_num = pic_src.search(str_lookup);
	pic_src = pic_src.substr(pic_num, pic_src.length);
	pic_num = pic_src.match(/\d+/);
	showDivs(pic_num - 1, arrayNumber2);
}
function loadPic(imgNumber, arrayNumber, arrayNumber2, dir){
	var pics = document.getElementsByClassName(imgArray[arrayNumber]);

	var pic_src = pics[imgNumber].src;
	str_lookup = /\d+.jpg/;

	pic_num = pic_src.search(str_lookup);
	pic_src = pic_src.substr(pic_num, pic_src.length);
	pic_num = pic_src.match(/\d+/);
	showDivs(pic_num - 0, arrayNumber2);
}
function carousel_slider(move, arrayNumber, arrayNumber2){

	plusDivs(move, arrayNumber);
	plusThumbs(move, arrayNumber2);
	setTimeout("carousel_slider(" + move + "," + arrayNumber + "," + arrayNumber2 +")", 5000);
}
