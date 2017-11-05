$('.page-scroll').on('click', function(e){

	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();
});

// parallax jumbotron
$(window).on('load',function() {
	$('.pTengah').addClass('pMuncul');
});


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
			'transform' : 'translate(0px, '+ wScroll/2 +'%)'
		});

	$('.jumbotron h5').css({
			'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
		});

});

