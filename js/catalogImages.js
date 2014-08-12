var catalogImages = (function() {
	
	var catalog = $('#catalog'),
		speedAnimate = 300;

	initialize = function() {
		$('#catalog').find('inner-catalog-img, img').on({
			mouseenter: function() {
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
					}, speedAnimate);
			}
		});

		$('.catalog-item').on( 'mouseleave', function() {
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