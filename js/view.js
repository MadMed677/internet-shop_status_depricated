var app = app || {};

/*
|---------------------------------------------------------
| Single View Good
|---------------------------------------------------------
*/

	var mmGoodView = Backbone.View.extend({

		tagName: 'div',

		className: 'catalog-item',

		template: _.template( $('#mmGood').html() ),

		events: {
			'click .changeCount': 'changeCount',
			'keydown input': 'validateInteger',
			'keyup input': 'changeCountInput'
		},

		/*
		|---------------------------------------------------------
		| Events
		|---------------------------------------------------------
		*/

			changeCount: function( event ) {
				var diff = $(event.target).closest('a').data('diff');
				var count = this.model.get('count');

				this.model.save({
					'count': count + diff
				}, { validate: true });

				this.colorizeCircle();

				if ( this.model.get('count') > 0 )
					this.model.save('inCart', 'true');
				else
					this.model.save('inCart', 'false');

				var priceT = this.model.get('count') * this.model.get('price');

				this.model.save({
					'totalPrice': priceT
				});

				event.preventDefault();
			},

			changeCountInput: function() {
				var count = $(event.target).val();

				if ( count > 100 ) {
					$(event.target).val(this.model.get('count'));
				} else {
					this.model.save({
						'count': +count
					});
				}

				this.colorizeCircle.call(this);
				if ( this.model.get('count') > 0 )

					this.model.save('inCart', 'true');
				else
					this.model.save('inCart', 'false');
			},

			validateInteger: function() {
				var key = event.keyCode;
				if ( (key < 48 || key > 57) && key !== 8 && key !== 13 && key !== 37 && key !== 39 ) {
					return false;
				}
			},

			colorizeCircle: function() {
				var input = this.$('.change-goods input');

				if ( +input.val() === 0 ) {
					input.css('border', '1px solid #aaa');
				} else {
					input.css('border', '1px solid #23aba7');
				}
			},

		/*
		|---------------------------------------------------------
		| Listeners
		|---------------------------------------------------------
		*/

			initialize: function() {
				this.model.on('change', this.render, this);
			},

			render: function() {
				this.$el.html( this.template( this.model.toJSON() ) );

				return this;
			}

	});

/*
|---------------------------------------------------------
| Single View Good in Shopping Cart
|---------------------------------------------------------
*/

	var mmGoodViewCart = Backbone.View.extend({

		tagName: 'div',

		className: 'basket-good',

		template: _.template( $('#mmShopCart').html() ),

		events: {
			'click .changeCount': 'changeCount',
			'keydown input': 'validateInteger',
			'keyup input': 'changeCountInput'
		},

		/*
		|---------------------------------------------------------
		| Events
		|---------------------------------------------------------
		*/

			changeCount: function( event ) {
				var diff = $(event.target).closest('a').data('diff');
				var count = this.model.get('count');

				this.model.save({
					'count': count + diff
				}, { validate: true });

				this.colorizeCircle();

				var priceT = this.model.get('count') * this.model.get('price');

				this.model.save({
					'totalPrice': priceT
				});

				event.preventDefault();
			},

			changeCountInput: function() {
				var count = $(event.target).val();

				if ( count > 100 ) {
					$(event.target).val(this.model.get('count'));
				} else {
					this.model.save({
						'count': +count
					});
				}

				this.colorizeCircle.call(this);
			},

			validateInteger: function() {
				var key = event.keyCode;
				if ( (key < 48 || key > 57) && key !== 8 && key !== 13 && key !== 37 && key !== 39 ) {
					return false;
				}
			},

			colorizeCircle: function() {
				var input = this.$('.change-goods input');

				if ( +input.val() === 0 ) {
					input.css('borderColor', '#aaa');
				} else {
					input.css('borderColor', '#23aba7');
				}
			},

		/*
		|---------------------------------------------------------
		| Listeners
		|---------------------------------------------------------
		*/

			initialize: function() {
				this.model.on('change', this.render, this);
			},

			render: function() {
				this.$el.html( this.template( this.model.toJSON() ) );

				return this;
			}

	});

/*
|---------------------------------------------------------
| All Goods Views
|---------------------------------------------------------
*/
	app.mmGoodsView = Backbone.View.extend({

		tagName: 'div',

		className: 'catalog-items',

		initialize: function() {
			this.collection.on('add', this.addOne, this);
			this.collection.on('change', this.changeTotalCount, this);
	
			this.size = $('#shopping-cart').find('span[data=totalSize]');
			this.paragraf = $('#shopping-cart').find('a > p');
			this.changeTotalCount();
		},

		render: function() {
			this.collection.each( this.addOne, this );

			return this;
		},

		addOne: function( good ) {
			var goodView = new mmGoodView({ model: good });
			this.$el.append( goodView.render().el );
		},

		changeTotalCount: function() {
			var size = this.size.text();
			var total = 0,
				price = 0;

			this.collection.each( function( model ) {
				total += model.get('count');
				price += model.get('price') * model.get('count');
			});

			if ( total === 0 ) {
				this.paragraf.closest('.shopping-cart-inner').css('opacity', '.5');
				this.paragraf.text('Нет товаров в корзине');
			} else {
				this.paragraf.closest('.shopping-cart-inner').css('opacity', '1');
				this.paragraf.html('<p>Товаров: <span data="totalSize">'+total+'</span> Итого: <span data="totalPrice">'+price+'</span><i class="fa fa-rub fa-little"></i></p>');
			}

		}

	});

/*
|---------------------------------------------------------
| All Goods Views in Shopping Cart
|---------------------------------------------------------
*/
	app.mmGoodsViewCart = Backbone.View.extend({

		tagName: 'div',

		className: 'basket-goods',

		initialize: function() {
			this.collection.on('change', this.addAll, this);
			this.total = $('.basket-total');
			this.toRender = $('#main-basket-goods');
		},

		render: function() {
			this.collection.each( this.addOne, this );

			return this;
		},

		addOne: function( good ) {
			$('#sendData').hide();
			$('.basket-total').hide();
			// this.$el.html('<p class="no-shopping-items">В корзине нет товаров</p>');
			this.toRender.html('<p class="no-shopping-items">В корзине нет товаров</p>');
		},

		addAll: function( good ) {
			var self = this,
				totalPrice = 0,
				totalCount = 0;

			var sendData = $('#sendData'),
				basketTotal = $('.basket-total');

			// this.$el.html('');
			this.toRender.html('');

			this.collection.each( function( item ) {
				if ( item.get('count') > 0 ) {
					var goodViewCart = new mmGoodViewCart({ model: item });
					// self.$el.prepend( goodViewCart.render().el );
					self.toRender.prepend( goodViewCart.render().el );

					totalPrice += item.get('count') * item.get('price');
					totalCount += item.get('count');
				}
			});

			this.total.find('.totalPrice').text(totalPrice);
			this.total.find('.totalCount').text(totalCount);

			// if ( this.$el.text() === '' ) {
			if ( this.toRender.text() === '' ) {
				sendData.hide();
				basketTotal.hide();
				// this.$el.html('<p class="no-shopping-items">В корзине нет товаров</p>');
				this.toRender.html('<p class="no-shopping-items">В корзине нет товаров</p>');
			} else {
				sendData.show();
				basketTotal.show();
			}
		}

	});










