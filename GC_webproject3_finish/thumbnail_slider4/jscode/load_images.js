function load_images(idName, className, img_src, last_count){
	var loop;
	var filename  = get_filename(img_src);
	var beg_statement = '<img  class="'+ className +'" src ="'+img_src;
	var mid_statement = '.jpg" alt = "+filename +';
	var end_statement = ' ">';
	document.getElementById(idName).innerHTML = "";
	for(loop = 1; loop <= last_count; loop++){
	    document.getElementById(idName).innerHTML += beg_statement + loop + mid_statement + loop + end_statement;
	}
	
}

function load_thumbnail(idName, className, img_src, thumb_src, last_count){
	var loop;
	var filename  = get_filename(img_src);
	var a_statement = '<a  href="#"  onclick="showPic(';
	var b_statement = ',1,0,\''+thumb_src+'\')">';
	var c_statement = '<img  class="'+ className +' thumb" src = "' + img_src;
	var d_statement = '.jpg" alt = "'+ filename + ' ';
	var e_statement = '"></a>';
	document.getElementById(idName).innerHTML = "";
	for(loop = 1; loop <= last_count; loop++){
	   
	    	var back_one = loop-1;
		document.getElementById(idName).innerHTML += a_statement + back_one + b_statement + c_statement + loop + d_statement + loop + e_statement;
	}
}	

function get_filename(img_src){
	var locate=img_src.lastIndexOf("/") + 1;
	var filename=img_src.substr(locate,img_src.length).toUpperCase();
	return filename;
}