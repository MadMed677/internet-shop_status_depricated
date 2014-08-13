;(function( $ ) {
	
	$.fn.ajaxFadeOut = function(speed, success) {

		speed = speed || 1000;
		success = success || (function() {});

		this
			.animate({
				'marginLeft': '-1000px'
			}, {
				delay: speed*2,
				complete: function() {
					success.call();
				}
			})
			.animate({
				'opacity': '0'
			}, {
				delay: speed,
				queue: false
			});

		return this;
	};

	$.fn.ajaxFadeIn = function(speed) {

		speed = speed || 1000;

		this
			.css({
				'marginLeft': '0',
				'marginRight': '1000px'
			})
			.animate({
				'marginRight': '0',
				'opacity': '1'
			}, {
				easing: 'easeOutCubic',
				delay: speed
			});

	};

})( jQuery );