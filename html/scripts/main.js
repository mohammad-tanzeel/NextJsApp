jQuery( document ).ready( function ( $ ) {
	if ( typeof $.mmenu === 'function' ) {
		$( '#nav' ).mmenu( {
			offCanvas: {
				position: 'right',
			},
		}, {
			clone: true,
		} );
	}

	$('.js-slider').slick({
		rows: 0,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	  });

	  $('.js-feature-slider').slick({
		rows: 0,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="icon-angle-left"></i></button>',
		nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="icon-angle-right"></i></button>',
		responsive: [
			{
			  breakpoint: 1140,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: 'unslick'
			}
		  ]
	  });

	  $('.js-project-slider').slick({
		rows: 0,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="icon-angle-left"></i></button>',
		nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="icon-angle-right"></i></button>',
		responsive: [
			{
			  breakpoint: 1140,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: 'unslick'
			}
		  ]
	  });

	  $(window).on('resize', function() {
        $('.js-project-slider, .js-feature-slider').slick('resize');
    });

	$(".help-btn").click(function(e){
		e.preventDefault();
		$(".helpBox .help").fadeIn();
	});

	$(".helpBox .close").click(function(e){
		e.preventDefault();
		$(".helpBox .help").fadeOut();
	});

});
