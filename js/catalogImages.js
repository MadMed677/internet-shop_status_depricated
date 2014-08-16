var catalogImages = (function() {
	
	var catalog = $('#catalog'),
		speedAnimate = 400,
		container = $('.container');

	initialize = function() {
		container.on( 'mouseenter', '.inner-catalog-img img', function() {
			var $this = $(this),
				imgHeight = $this.height(),
				imgWidth = $this.width(),
				block = $this.parent().next();

			block
				.css('height', imgHeight+4)
				.stop()
				.animate({
					'marginTop': 0,
					'opacity': 1
				}, speedAnimate, 'easeOutQuart');
		});

		container.on( 'mouseleave', '.catalog-item', function() {
			$(this).find('.inner-catalog-item').stop().animate({
				'marginTop': '-300px',
				'opacity': 0
			}, speedAnimate);
		});
	};

	return {
		initialize: initialize
	};

})();

// catalogImages.initialize();