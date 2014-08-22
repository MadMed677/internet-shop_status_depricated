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

	if ( $(window).outerWidth() < 768 ) {
		shoppingCart.css('top', '99px');
	}

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

			if ( $(window).outerWidth() < 768 ) {
				shoppingCart.css('top', '69px');
			} else {
				shoppingCart.css('top', '80px');
			}

			// Shopping Cart
			shoppingCart
				.children()
				.css('padding', '0.25em 0');

		littleMenu = true;

	} else if ( headerOffset < marginOffset && littleMenu === true ) {

			if ( $(window).outerWidth() < 768 ) {

				header1.css({ 'lineHeight': '97px' });
				shoppingCart.css('top', '99px');

			} else {

				header1.css({ 'lineHeight': '109px' });
				shoppingCart.css('top', '115px');

			}

			mainSection.css({ 'paddingTop': '7.2em' });
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
				.children()
				.css('padding', '0.75em 0');

		littleMenu = false;

	}
});