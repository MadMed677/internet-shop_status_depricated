var header = $('#main-header'),
	container = $('.container'),
	links = header.find('a'),
	allLinks = $('a');

header.on('click', 'a', function(event) {
	var $this = $(this),
		thisLink = $this;

	href = $this.attr('href').slice(1);
	
	if ( href === '' || $this.hasClass('menu-active') ) {
		event.preventDefault();
		return;
	}

	links.removeClass('menu-active');
	thisLink.addClass('menu-active');

	href += '.php';
	
	/*
	|---------------------------------------------------------
	| УТЕЧКА ПАМЯТИ
	|---------------------------------------------------------
	*/
	container.load( href + ' #main-section', function() {
		catalogImages.initialize();
		mmInternetShop.initialize();
	});

	// $(document)
	// 	.bind('ajaxSend', function() {
	// 		console.log('sending');
	// 		$('#loading').fadeIn(1000);
	// 	})
	// 	.bind('ajaxComplete', function() {
	// 		$('#loading').fadeOut(1000);
	// 	});

	// $.ajax({
	// 	url: href,

	// 	dataType: 'html',

	// 	beforeSend: function() {
	// 		$('#loading').fadeIn();
	// 		links.removeClass('menu-active');
	// 	},

	// 	success: function(data) {
	// 		console.log(thisLink, links);
	// 		$('#loading').delay(1000).fadeOut();
	// 		$(document.body).html(data);
	// 		// thisLink.addClass('menu-active');
	// 	}
	// });
});