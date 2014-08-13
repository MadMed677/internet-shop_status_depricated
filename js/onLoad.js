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

	href = 'ajax/' + href;
	href += '.php';

	$.ajax({
		url: href,

		dataType: 'html',

		success: function(data) {

			container.ajaxFadeOut(2000, function() {
				container.html(data).delay(500).ajaxFadeIn(2000);
				
				mmInternetShop.initialize();
			});
		}
	});
});