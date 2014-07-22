/**
*	Bootstrap the javascript
*/

$(document).ready(function () {
	
	var opts = {
		controls: {
			playPause: {auto: false},
			previousSlide: {auto: false},
			nextSlide: {auto: false},
			index: {auto: true}
		}
	};
	$('.rs-slideshow').rsfSlideshow(opts);
	
});


$(document).ready(function () {
	
	var opts = {
		controls: {
			playPause: {auto: false},
			previousSlide: {auto: true},
			nextSlide: {auto: true},
			index: {auto: false}
		}
	};
	$('.rs-slideshow_small').rsfSlideshow(opts);
	
});
