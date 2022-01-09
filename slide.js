var i = 0; 			// Start Point
var images = [];	// Images Array
	 
// Image List
images[0] = "img/image1.jpg";
images[1] = "img/image2.jpg";
images[2] = "";
images[3] = "img/image3.jpg";
images[4] = "img/image4.png";
images[5] = "img/image5.jpg";
images[6] = "img/image6.png";
images[7] = "";
images[8] = "";
images[9] = "img/image7.jpg";
images[10] = "img/image8.jpg";
images[11] = "img/image9.jpg";
images[12] = "img/image10.jpg";
images[13] = "img/image11.jpg";
images[14] = "img/image12.jpg";
images[15] = "img/image13.jpg";
images[16] = "";
images[17] = "";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
    }

    window.onload=changeImg;
}


