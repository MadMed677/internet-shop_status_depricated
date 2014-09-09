/*
|---------------------------------------------------------
| Basket Cart Initialization
|---------------------------------------------------------
*/
	var basketCart = (function() {
		
		var mainBasket = $('#main-basket'),
			speed = 1000;

		var initialize = function() {
			if ( $(window).outerWidth() < 650 ) {
				mainBasket.fadeIn(speed).css('margin', '0 auto').animate({'top': '0px'}, speed/2);
			} else {
				mainBasket.fadeIn(speed).animate({'top': '100px'}, speed/2);
			}

			darkBlock.initialize();
		};

		var setDarkBlock = function() {
			darkBlock.setBlock();
		};

		var uninitialize = function() {
			mainBasket.animate({'top': '-700px'}, {delay: speed*2, queue: false}).fadeOut(speed);
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









