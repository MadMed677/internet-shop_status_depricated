$('.wrapper').on('click', '.basket', function() {
	basketCart.initialize();
	basketCart.setDarkBlock();
});

$('.wrapper').on('click', '#dark-block', function() {
	basketCart.uninitialize();
});