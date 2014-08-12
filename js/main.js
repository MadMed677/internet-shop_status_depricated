var mmInternetShop = (function( $ ) {
	
	function changeWhyMe( event ) {
		event.preventDefault();

		var links = $('.why-me-nav').find('a'),
			$this = $(this),
			index = $this.data('index'),

			blocks = $('.why-me-loc').children('div');
			thisBlock = blocks.eq(index-1),

			descs = $('.why-me-desc').children('div'),
			thisDesc = descs.eq(index-1),
			speed = 300;
			
		links.removeClass('why-me-active');
		$this.addClass('why-me-active');

		if ( thisBlock.length ) {
			blocks.fadeOut(speed/300, function() {
				thisBlock.fadeIn(speed);
			});
		} else {
			blocks.fadeOut(speed);
		}

		if ( thisDesc.length ) {
			descs.fadeOut(speed/300, function() {
				thisDesc.fadeIn(speed);
			});
		} else {
			descs.fadeOut(speed);
		}

		if ( thisBlock.children('h3').text() === '' ) {
			thisBlock.children('h3').text('.').css('opacity', '0');
		}

	}

	return {
		initialize: function() {

			blocks = $('.why-me-loc').children('div').hide();
			descs = $('.why-me-desc').children('div').hide();

			blocks.eq(0).show();
			descs.eq(0).show();

			$('.why-me-nav').find('a').on('click', changeWhyMe);
		}
	};

})( jQuery );

mmInternetShop.initialize();


























