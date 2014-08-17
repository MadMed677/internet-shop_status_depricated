/*
|---------------------------------------------------------
| Tabs
|---------------------------------------------------------
*/
// var catalogImages = (function() {
	
// 	var catalog = $('#catalog'),
// 		speedAnimate = 400,
// 		container = $('.container');

// 	initialize = function() {
// 		container.on( 'mouseenter', '.inner-catalog-img img', function() {
// 			var $this = $(this),
// 				imgHeight = $this.height(),
// 				imgWidth = $this.width(),
// 				block = $this.parent().next();

// 			block
// 				.css('height', imgHeight+4)
// 				.stop()
// 				.animate({
// 					'marginTop': 0,
// 					'opacity': 1
// 				}, speedAnimate, 'easeOutQuart');
// 		});

// 		container.on( 'mouseleave', '.catalog-item', function() {
// 			$(this).find('.inner-catalog-item').stop().animate({
// 				'marginTop': '-300px',
// 				'opacity': 0
// 			}, speedAnimate);
// 		});
// 	};

// 	return {
// 		initialize: initialize
// 	};

// })();


/*
|---------------------------------------------------------
| Basket Cart Initialization
|---------------------------------------------------------
*/
	var basketCart = (function() {
		
		var initialize = function() {
			$('#main-basket').fadeIn(1000);
			darkBlock.initialize();
		};

		var setDarkBlock = function() {
			darkBlock.setBlock();
		};

		var uninitialize = function() {
			$('#main-basket').fadeOut(1000);
			darkBlock.uninitialize();
		};

		return {
			initialize: initialize,
			setDarkBlock: setDarkBlock,
			uninitialize: uninitialize
		};

	})();

/*
|---------------------------------------------------------
| Dark Block
|---------------------------------------------------------
*/
	var darkBlock = (function() {
		
		var dark = $('#dark-block');

		var initialize = function() {
			var userWidth = $(window).width(),
				userHeight = $(window).height();

			dark.css({
				'width': userWidth,
				'height': userHeight
			});
		};

		var setBlock = function() {
			dark.css('display', 'block').animate({'opacity': 1}, 500);
		};

		var uninitialize = function() {
			dark.animate({'opacity': 0}, 500, function() {
				$(this).css('display', 'none');
			});
		};

		return {
			initialize: initialize,
			setBlock: setBlock,
			uninitialize: uninitialize
		};

	})();









