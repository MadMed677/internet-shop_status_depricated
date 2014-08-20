$('.wrapper').on('click', '.basket', function() {
	basketCart.initialize();
	basketCart.setDarkBlock();
	$('html, body').css('overflow', 'hidden');
});

$('.wrapper').on('click', '#dark-block, .back-buy', function( event ) {
	event.preventDefault();
	basketCart.uninitialize();
	$('html, body').css('overflow', 'auto');
});