var header = $('#main-header'),
	container = $('.container'),
	links = header.find('a'),
	allLinks = $('.wrapper');


allLinks.on('click', 'a', function() {
	var $this = $(this),
		thisLink = $this;

	href = $this.attr('href').slice(1);

	if ( href === '' || thisLink.hasClass('menu-active') ) {
		event.preventDefault();
		return;
	}

	href = 'ajax/' + href + '.php';

	links.removeClass('menu-active');

	if ( thisLink.closest('.menu').length ) {
		thisLink.addClass('menu-active');
	} else {
			$.each( links, function() {

				if ( href.indexOf($(this).attr('href').slice(1)) !== -1 ) {
					$(this).addClass('menu-active');
				}

			});
	}
	
	mmLoadPage(href);
});