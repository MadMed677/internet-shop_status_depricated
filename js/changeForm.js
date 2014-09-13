var validateTheForm = (function() {
	
	function initialize() {
		var nameField = $('.wrapper').find('#name'),
			phoneField = $('.wrapper').find('#phone'),
			emailField = $('.wrapper').find('#email'),
			vkField = $('.wrapper').find('#vk'),
			buttonSending = $('.wrapper').find('#buttonSending'),
			form = $('.wrapper').find('#sendData');

		// Поля, нуждающие в обязательном заполнении
		var fields = [nameField, phoneField, emailField];

		function activateButton() {
			var count = 0;

			$.each(fields, function() {
				count += $(this).closest('.form-col').hasClass('form-success');
			});

			if ( count === fields.length ) {
				buttonSending.removeAttr('disabled');
			} else {
				buttonSending.attr('disabled', 'disabled');
			}
		}

		emailField.on('blur keyup', function() {
			if ( $(this).validEmail() === false ) {
				$(this)
					.closest('.form-col')
					.removeClass('form-success')
					.addClass('form-error');

				if ( $(this).closest('div').siblings('i.fa-times').length === 0 ) {
					$('<i class="fa fa-times"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-check').length === 1 ) {
					$(this).closest('div').siblings('i.fa-check').remove();
				}

			} else {

				$(this)
					.closest('.form-col')
					.removeClass('form-error')
					.addClass('form-success');
				if ( $(this).closest('div').siblings('i.fa-check').length === 0 ) {
					$('<i class="fa fa-check"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-times').length === 1 ) {
					$(this).closest('div').siblings('i.fa-times').remove();
				}

			}

			activateButton.call(this);
		});

		phoneField.on('blur keyup', function() {
			if ( $(this).validPhone() === false ) {
				
				$(this)
					.closest('.form-col')
					.removeClass('form-success')
					.addClass('form-error');

				if ( $(this).closest('div').siblings('i.fa-times').length === 0 ) {
					$('<i class="fa fa-times"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-check').length === 1 ) {
					$(this).closest('div').siblings('i.fa-check').remove();
				}

			} else {
				$(this)
					.closest('.form-col')
					.removeClass('form-error')
					.addClass('form-success');
				if ( $(this).closest('div').siblings('i.fa-check').length === 0 ) {
					$('<i class="fa fa-check"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-times').length === 1 ) {
					$(this).closest('div').siblings('i.fa-times').remove();
				}
			}
			
			activateButton.call(this);
		});

		vkField.on('blur keyup', function() {
			if ( $(this).val() === '' ) {
				
				$(this)
					.closest('.form-col')
					.removeClass('form-success')
					.addClass('form-warning');

				if ( $(this).closest('div').siblings('i.fa-times').length === 0 ) {
					$('<i class="fa fa-times"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-check').length === 1 ) {
					$(this).closest('div').siblings('i.fa-check').remove();
				}

			} else {
				$(this)
					.closest('.form-col')
					.removeClass('form-warning')
					.addClass('form-success');
				if ( $(this).closest('div').siblings('i.fa-check').length === 0 ) {
					$('<i class="fa fa-check"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-times').length === 1 ) {
					$(this).closest('div').siblings('i.fa-times').remove();
				}
			}
			
			activateButton.call(this);
		});

		nameField.on('blur keyup', function() {
			if ( $(this).validName() === false ) {

				$(this)
					.closest('.form-col')
					.removeClass('form-success')
					.addClass('form-error');

				if ( $(this).closest('div').siblings('i.fa-times').length === 0 ) {
					$('<i class="fa fa-times"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-check').length === 1 ) {
					$(this).closest('div').siblings('i.fa-check').remove();
				}

			} else {
				
				$(this)
					.closest('.form-col')
					.removeClass('form-error')
					.addClass('form-success');
				if ( $(this).closest('div').siblings('i.fa-check').length === 0 ) {
					$('<i class="fa fa-check"></i>').css('line-height', '31px').insertAfter( $(this).closest('div') );
				}

				if ( $(this).closest('div').siblings('i.fa-times').length === 1 ) {
					$(this).closest('div').siblings('i.fa-times').remove();
				}

			}
			
			activateButton.call(this);
		});

		form.on('submit', function( event ) {
			if ( !nameField.validName() || !phoneField.validPhone() ) {
				return false;
			}

			var items = [],
				myJsonScring = '',
				collection = app.goodsCollection;

			collection.each( function( item ) {
				if ( item.get('count') > 0 ) {
					items.push({
						title: item.get('title'),
						// img: item.get('img'),
						// firm: item.get('firm'),
						count: item.get('count'),
						price: item.get('price'),
						totalPrice: item.get('totalPrice')
					});
				}
			});

			myJsonString = JSON.stringify( items );

			var formData = $(this).serialize();
			var totalData = 'json=' + myJsonString + '&' + formData;

			$.ajax({
				url: 'ajax/php/email_send.php',
				type: 'post',
				data: totalData,

				success: function( msg ) {
					if ( msg == 'ok' ) {

						basketCart.uninitialize();
						$('html, body').css('overflow', 'auto');

						$('<div class="bg-success">Спасибо за заявку! Я позвоню как только увижу твое письмо :)</div>')
							.appendTo(document.body)
							.delay(500)
							.fadeIn(1000, function() {
								$(this).delay(2000).fadeOut(1000);
							});

						localStorage.clear();
						app.goodsCollection.each( function( item ) {
							item.save({
								count: 0
							});
						});

					} else {

						$('<div class="bg-error">Что-то пошло не так, попробуй вбить данные снова и переотправить заявку.</div>')
							.appendTo(document.body)
							.delay(500)
							.fadeIn(1000, function() {
								$(this).delay(2000).fadeOut(1000);
							});
					}
				},

				error: function() {
					console.log('error');
				}
			});

			event.preventDefault();
		});

	}

	function uninitialize() {
		emailField.off('keyup');
		phoneField.off('keyup');
		nameField.off('keyup');
	}

	return {
		initialize: initialize,
		uninitialize: uninitialize
	};

})();

validateTheForm.initialize();