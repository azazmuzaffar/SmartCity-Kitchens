if (window.matchMedia("(max-width: 1920px)").matches) {
	/* the viewport is less than 768 pixels wide */
  
	var $slickEl = $('.partners-slider');
  
	$slickEl.slick({
		slidesToShow: 5,
		dots: false,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 400,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  arrows: false,
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '0px',
			  dots: false,
			  slidesToShow: 2
			}
		  }
		]
	  });
  } 