/*
|---------------------------------------------------------
| Variables
|---------------------------------------------------------
*/
	var header = $('#main-header'),

		// Section
		mainSection = $('#main-section'),

		// Logotype
		logo = $('.logo').find('img'),
		header1 = $('.logo').find('h1'),
		imgWrapper = logo.closest('div'),

		//Shopping Cart
		shoppingCart = $('#shopping-cart'),

		// Href
		menuHref = $('.menu').find('a'),

		marginOffset = 200,

		littleMenu = false,

		headerOffset = 0;


$(window).on( 'scroll', function() {
	headerOffset = header.offset().top;

	if ( headerOffset >= marginOffset && littleMenu === false ) {
		
			mainSection.css({ 'paddingTop': '5.2em' });
			header1.css({ 'lineHeight': '75px' });
			menuHref.css({
				'padding': '2em 1em',
				'transition-delay': '.2s'
			});

			logo.css({
				'maxWidth': '70%',
				'transition-delay': '.2s'
			});

			// Shopping Cart
			shoppingCart
				.css({
					'top': '80px'
				})
				.children()
				.css('padding', '0.25em 0');

		littleMenu = true;

	} else if ( headerOffset < marginOffset && littleMenu === true ) {

			mainSection.css({ 'paddingTop': '7.2em' });
			header1.css({ 'lineHeight': '109px' });
			menuHref.css({
				'padding': '3em 1em',
				'transition-delay': '0s'
			});

			logo.css({
				'transition-delay': '0s',
				'maxWidth': '100%'
			});

			// Shopping Cart
			shoppingCart
				.css({
					'top': '115px'
				})
				.children()
				.css('padding', '0.75em 0');

		littleMenu = false;

	}
});