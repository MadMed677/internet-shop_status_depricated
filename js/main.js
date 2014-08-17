var mmInternetShop = (function( $ ) {
	
	var container = $('.container');

	function changeWhyMe( event ) {
		if ( $(event.target).attr('href') === '#' ) {		
			event.preventDefault();
			return;
		}

		console.log( $(event.target).attr('href') );

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

			container.on('click', '.why-me-nav a', changeWhyMe);
		}
	};

})( jQuery );

mmInternetShop.initialize();


/*
|---------------------------------------------------------
| Flying Background Slider
|---------------------------------------------------------
*/
	$(document.body).ready( function() {
		
		setTimeout( function() {
			$('.slider-image')
				.ClassyWiggle('start', {
					degrees: ['.5', '1', '.5', '0'],
					delay: 70

				})
				.on('mouseenter', function() {
					$(this).ClassyWiggle('stop');
				});
			}, 1000);

		setInterval( function() {
			$('.main-slider').css({
				'background-position-x': '-=1px'
			});
		},	20);

	});

	$(window).resize( function() {
		darkBlock.initialize();
	});

/*
|---------------------------------------------------------
| Redirect by 'Hash' location
|---------------------------------------------------------
*/

	function mmFindHash() {

		// Variables
		var header = $('#main-header'),
			links = header.find('a');
			
		// Проверка текущего hash'а
		hash = window.location.hash;
		href = window.location.href;

		var link = '';
		links.removeClass('menu-active');

		// Если у нас домашняя страница
		if ( hash === '' || hash === '#' )
			hash = 'index';
		else
			hash = hash.slice(1);


		$.each( links, function(index, link) {
			if ( $(this).attr('href').indexOf(hash) !== -1 ) {
				$(this).addClass('menu-active');
			}
		});

		link = 'ajax/' + hash + '.php';

		mmLoadPage.call(this, link);
	}

	function mmLoadPage(link) {
		
		var onCatalog = false;

		link = link || 'ajax/index.php';

		if ( link.indexOf('catalog') !== -1 ) onCatalog = true;

		$.ajax({
			url: link,

			dataType: 'html',

			success: function(data) {

				container.ajaxFadeOut(2000, function() {
					container.html(data).delay(500).ajaxFadeIn(2000);
					
					$(window).scrollTop(0);
					mmInternetShop.initialize();

					if ( onCatalog ) {
						mmGoods.initialize();
						$('#shopping-cart')
							.css({
								'display': 'block',
								'right': '-100px',
								'opacity': 0
							})
							.animate({
								'right': '0',
								'opacity': 1
							}, 400 );
					}
				});

				if ( !onCatalog ) {
					$('#shopping-cart')
						.css({
							'right': '100px'
						})
						.animate({
							'right': '100px',
							'opacity': 0
						}, 400);
				}
			},

			error: function() {

				var data = ['<div class="bg-error">',
							'Произошла ошибка, перезагрузите страницу',
							' или попробуйте зайти на сайт позже</div>'].join('');

				container.ajaxFadeOut(2000, function() {
					container.html(data).delay(500).ajaxFadeIn(2000);
				});

				// Блок Error
				setInterval(function() {
					if ( container.find('.bg-error').css('box-shadow').indexOf('30px') !== -1 ) {
						container.find('.bg-error').css({
							'box-shadow': '0 0 0 rgba(192, 57, 43, .8)'
						});
					} else {
						container.find('.bg-error').css({
							'box-shadow': '0 0 30px rgba(192, 57, 43, .8)'
						});
					}
				}, 400);
			}
		});
	}


	mmFindHash();

















