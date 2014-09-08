var wayp = (function() {
	
	function initialize() {
		$('.reasons-block').waypoint( function() {
			// $(this).find('.reason-block').addClass('animated fadeInLeft');
			$(this).find('.reason-block').eq(0).addClass('animated fadeInRight');
			$(this).find('.reason-block').eq(1).addClass('animated fadeInLeft');
			$(this).find('.reason-block').eq(2).addClass('animated fadeInRight');
		}, {
			offset: '80%'
		});

		$('.our-team-blocks').waypoint( function() {
			$(this).find('.our-team-block').addClass('animated bounceInLeft');
		}, {
			offset: '110%'
		});

		$('.sexy-block-inner').waypoint( function() {
			$(this).addClass('animated shake');
		}, {
			offset: '40%'
		});

		$('.contact-details').waypoint( function() {
			$(this).children('div').addClass('animated fadeInUp');
		}, {
			offset: '50%'
		});
	}

	return {
		initialize: initialize
	};

})();