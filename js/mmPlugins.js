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
				'marginRight': '-1000px'
			})
			.animate({
				'marginRight': '0',
				'opacity': '1'
			}, {
				easing: 'easeOutCubic',
				delay: speed
			});

	};

	$.fn.validEmail = function(options) {
		options = options || {};
		var on = options.on;
		var success = options.success || (function(){});
		var failure = options.failure || (function(){});
		var testInitially = options.testInitially || false;

		var $input = $(this);

		function check($input) {
			if($input.is("input,textarea")) {
				var emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
				return emailRegExp.test($input.val());
			} else {
				return false;
			}

		}

		function applyCode($input) {
			check($input) ? success.call($input.get(0)) : failure.call($input.get(0));
		}
		
		if (typeof on === "string")
			$input.bind(on, function() { applyCode($(this)); });

		if (testInitially) $input.each(function() { applyCode($(this)); });
		return check($input);

	};

	$.fn.validPhone = function(options) {
		options = options || {};
		var on = options.on;
		var success = options.success || (function(){});
		var failure = options.failure || (function(){});
		var testInitially = options.testInitially || false;

		var $input = $(this);

		function check($input) {
			if($input.is("input,textarea")) {
				var phoneRegExp = /^\+?([87](?!95[4-79]|99[^2457]|907|94[^0]|336)([348]\d|9[0-689]|7[027])\d{8}|[1246]\d{9,13}|68\d{7}|5[1-46-9]\d{8,12}|55[1-9]\d{9}|500[56]\d{4}|5016\d{6}|5068\d{7}|502[45]\d{7}|5037\d{7}|50[457]\d{8}|50855\d{4}|509[34]\d{7}|376\d{6}|855\d{8}|856\d{10}|85[0-4789]\d{8,10}|8[68]\d{10,11}|8[14]\d{10}|82\d{9,10}|852\d{8}|90\d{10}|96(0[79]|17[01]|13)\d{6}|96[23]\d{9}|964\d{10}|96(5[69]|89)\d{7}|96(65|77)\d{8}|92[023]\d{9}|91[1879]\d{9}|9[34]7\d{8}|959\d{7}|989\d{9}|97\d{8,12}|99[^456]\d{7,11}|994\d{9}|9955\d{8}|996[57]\d{8}|380[34569]\d{8}|381\d{9}|385\d{8,9}|375[234]\d{8}|372\d{7,8}|37[0-4]\d{8}|37[6-9]\d{7,11}|30[69]\d{9}|34[67]\d{8}|3[12359]\d{8,12}|36\d{9}|38[1679]\d{8}|382\d{8,9})$/i;
				return phoneRegExp.test($input.val());
			} else {
				return false;
			}

		}

		function applyCode($input) {
			check($input) ? success.call($input.get(0)) : failure.call($input.get(0));
		}
		
		if (typeof on === "string")
			$input.bind(on, function() { applyCode($(this)); });

		if (testInitially) $input.each(function() { applyCode($(this)); });
		return check($input);

	};

	$.fn.validName = function(options) {
		options = options || {};
		var on = options.on;
		var success = options.success || (function(){});
		var failure = options.failure || (function(){});
		var testInitially = options.testInitially || false;

		var $input = $(this);

		function check($input) {
			if($input.is("input,textarea")) {
				var nameRegExp = /^[a-zA-Zа-яА-Я ]{3,30}$/i;
				return nameRegExp.test($input.val());
			} else {
				return false;
			}

		}

		function applyCode($input) {
			check($input) ? success.call($input.get(0)) : failure.call($input.get(0));
		}

		if (typeof on === "string")
			$input.bind(on, function() { applyCode($(this)); });

		if (testInitially) $input.each(function() { applyCode($(this)); });
		return check($input);

	};

})( jQuery );