$(document).ready(function(){
  $('.ba-slider').slick({
  	vertical:true,
  	dots:true,
		arrows:false,
		asNavFor:'.ba-intro__bg-wood-slider',
		appendDots:'.ba-slider-wrap',
		infinity:true,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					vertical:false,
					infinite: true,
					dots: true,
					
				}
			}
		]
	});
	$('.ba-intro__bg-wood-slider').slick({
		vertical:true,
	verticalSwiping:true,
	  dots:false,
	  infinity:true,
		arrows:false,
		asNavFor:'.ba-slider'
	});
/// slow link scroll

	$(".ba-intro").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
	/// mobile menu 
	var nav = $('.ba-mobile-nav') ,
			overlay = $('.ba-overlay'),
			wrap = $('.ba-wrap'),
	menuToggle = $('.ba-menu-button, .ba-overlay') ;
	menuToggle.on('click' , function (e) {
		e.preventDefault();
		nav.toggleClass('ba-open');
		overlay.toggleClass('ba-open-overlay');
		wrap.toggleClass('ba-open');
	});

	// init magnific-popup
	$('[data-modal-video]').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 310
		
	});

});

