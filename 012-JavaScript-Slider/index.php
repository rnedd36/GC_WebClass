<?php
	$page_title = 'Javacript Load Images';
	include_once '../../resource/session.php';
	include_once '../../resource/Database.php';
	include_once '../../resource/utilities.php';

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title><?php if (isset($page_title)){echo $page_title;} ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php if (isset($_SESSION['username'])): ?>
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/thumbnail.css">
		<link rel="stylesheet" href="css/flex-box.css">
		<link rel="stylesheet" href="css/link_button.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<script src="jscode/image_slider.js"></script>
		<script src="jscode/load_images.js"></script>
	</head>
	<body onload="showDivs(0,0)">
		<!--Webpage Content goes here  -->

		<div class="topnav">
			<a class="active" href="../../index.php">Home</a>
			<a href="#">News</a>
			<a href="#">Contact</a>
			<a href="#">About</a>
		</div>
		<main>
			<div  class="inner-container ">
				<div id="thumb_img" class="flex-box">
				<a  href="#"  onclick="showPic(0,1,0,'img/')">
  				<img class="imgThumb1 thumb" src="img/Picture1.jpg" alt="Picture 1" >
				</a>
				<a href="#" onclick="showPic(1,1,0,'img/')">
  				<img class="imgThumb1 thumb" src="img/Picture2.jpg" alt="Picture 2" >
				</a>
				<a  href="#" onclick="showPic(2,1,0,'img/')" >
  				<img class="imgThumb1 thumb" src="img/Picture3.jpg" alt="Picture 3">
				</a>
				<a href="#" onclick="showPic(3,1,0,'img/')">
  				<img class="imgThumb1 thumb" src="img/Picture4.jpg" alt="Picture 4" >
				</a>
				</div>
				<button class="prev" onclick="plusThumbs(-1,1)"> &#10094;</button>
				<button class="next" onclick="plusThumbs(1,1)"> &#10095;</button>
				
			</div>
			<div class="inner-container">
				<div id="car_img">
				<img  class="imgSlide1 show_me" src = "img/Picture1.jpg" alt = "Pexels Picture1 Stock Photo">
				<img  class="imgSlide1" src = "img/Picture2.jpg" alt = "Pexels Picture2 Stock Photo">
				<img  class="imgSlide1" src = "img/Picture3.jpg" alt = "Pexels Picture3 Stock Photo">
				<img  class="imgSlide1" src = "img/Picture4.jpg" alt = "Pexels Picture4 Stock Photo">
				</div>
				<div id="piclabel"></div>
				<button class="btn_link bottom" onclick="load_images('car_img', 'imgSlide1', 'img/img_cars/car',60);load_thumbnail('thumb_img', 'imgThumb1', 'img/img_cars/car', 'img/img_cars/', 60);showDivs(0,0);">CARS</button>
				<button class="btn_link bottom" onclick="load_images('car_img', 'imgSlide1', 'img/Picture',5);load_thumbnail('thumb_img', 'imgThumb1', 'img/Picture', 'img/', 5);showDivs(0,0);">LANDSCAPE</button>
				<button class="prev" onclick="plusDivs(-1,0)"> &#10094; Prev</button>
				<button class="next" onclick="plusDivs(1,0)">Next &#10095;</button>
			</div>
		</main>
		<script>carousel_slider(1,0,1);</script>
<?php else: ?>
	<link href="../../css/homepage_20150101.css" rel="stylesheet" type="text/css" />
	<link href="../../css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="../../css/main.css" rel="stylesheet" type="text/css" />
	<link href="../../css/alertBox.css" rel="stylesheet" type="text/css" />
	<link href="../../css/contact.css" rel="stylesheet" type="text/css"/>
	</head>
	<body>
	<div class="header clearfix">
  		<div id="temp"><img src="../../img_home/mountainGoat01.jpg" alt="Mountain Goat" class="avatar" ></div>
	
	<h1 class="clearLeft" >Technical Mountain Goat</h1>
	</div>

		<div id="dialogoverlay"></div>
		<div id="dialogbox">
			<div>
				<div id="dialogboxhead"></div>
				<div id="dialogboxbody"></div>
				<div id="dialogboxfoot"></div>
			</div>
		</div>
		<div id="navWrapper">
			<div id="navWrapper">
				<ul>
					<li><a href='#' tabindex="1">Bio</a><span class="downArrow">&#9660;</span>
					    <ul class="HomeSub">
						<li><a href="#">Learn More</a><span class="rightArrow">&#9654;</span>
						    <ul class="HomeSub2">
							<li><a href="../../Projects/CCofGuyana.html">My Heritage</a></li>
							<li><a href="www.linkedin.com/in/raulnedd22">LinkedIn</a></li>
							<li><a href="../../Projects/about_me.html">About Me</a></li>
					    	    </ul>
						</li>
					    </ul>
					</li>
					<li><a href="../../contact.php" tabindex="3">Contact Me</a></li>
					<li><a href="../../login.php" tabindex="4">Login</a><span class="downArrow"></span></li>
				</ul>
		</div>
		<div class="header clearfix">
			<div id="temp"><img src="../../img_home/stop_sign.jpg" alt="Stop Sign" class="avatar2"></div>
			<h1 class="clearLeft">You are currently not logged in. </h1>
		</div>
		<?php endif ?>
		<?php
			include_once '../../partials/footers.php';
		?>
</body>
</html>
	
			
		