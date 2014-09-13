/*
|---------------------------------------------------------
| Flying Background Slider
|---------------------------------------------------------
*/
	$(document.body).ready( function() {
		
		var backgroundSoaring,
			wiggleBox;

		wiggleBox = setTimeout( function() {
			$('.slider-image')
				.ClassyWiggle('start', {
					degrees: ['.5', '1', '.5', '0'],
					delay: 70

				})
				.on('mouseenter', function() {
					$(this).ClassyWiggle('stop');
				});
			}, 1000);

		backgroundSoaring = setInterval( function() {
			$('.main-slider').css({
				'background-position-x': '-=1px'
			});
		},	20);

		if ( $(window).outerWidth() < 768 ) {
			setTimeout( function() {
				if ( wiggleBox !== undefined ) $('.slider-image').ClassyWiggle('stop');
				if ( backgroundSoaring !== undefined ) clearInterval( backgroundSoaring );
			}, 1000);
		} else {

		}

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
		
		var onCatalog = false,
			onIndex = false;

		link = link || 'ajax/index.php';

		if ( link.indexOf('catalog') !== -1 ) onCatalog = true;
		if ( link.indexOf('index') !== -1 ) onIndex = true;

		$.ajax({
			url: link,

			dataType: 'html',

			success: function(data) {

				container.ajaxFadeOut(2000, function() {
					container.html(data).delay(500).ajaxFadeIn(2000);

					$(window).scrollTop(0);

					if ( onIndex ) {
						gismap.initialize();
						wayp.initialize();
					}

					if ( onCatalog ) {
						mmGoods.initialize();
						app.goodViewCollection.changeTotalCount();
						app.goodViewCollectionCart.addAll();
						
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
							'<p>Произошла ошибка, перезагрузите страницу',
							' или <a href="#index">перейдите</a> на главную страницу</p></div>'].join('');

				container.ajaxFadeOut(2000, function() {
					container.html(data).delay(500).ajaxFadeIn(2000);
				});

				// Блок Error
				var errorTimer;
				errorTimer = setInterval(function() {
					if ( container.find('.bg-error').length ) {
						if ( container.find('.bg-error').css('box-shadow').indexOf('30px') !== -1 ) {
							container.find('.bg-error').css({
								'box-shadow': '0 0 0 rgba(192, 57, 43, .8)'
							});
						} else {
							container.find('.bg-error').css({
								'box-shadow': '0 0 30px rgba(192, 57, 43, .8)'
							});
						}
					} else {
						clearInterval(errorTimer);
					}
				}, 400);
			},

			complete: function() {

			}
		});
	}


	mmFindHash();
	mmLoadPage.count = 0;















