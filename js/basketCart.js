$('.wrapper').on('click', '.basket', function() {
	basketCart.initialize();
	basketCart.setDarkBlock();
});

$('.wrapper').on('click', '#dark-block, .back-buy', function( event ) {
	event.preventDefault();
	basketCart.uninitialize();
});