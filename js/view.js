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

				this.model.set({
					'count': count + diff
				}, { validate: true });

				this.colorizeCircle();

				event.preventDefault();
			},

			changeCountInput: function() {
				var count = $(event.target).val();

				if ( count > 100 ) {
					
					$(event.target).val(this.model.get('count'));

				} else {
				
					this.model.set({
						'count': +count
					});

				}

			},

			validateInteger: function() {
				
				var key = event.keyCode;
				if ( (key < 48 || key > 57) && key !== 8 && key !== 13 && key !== 37 && key !== 39 ) {
					return false;
				}
			},

			colorizeCircle: function() {
				var input = this.$('.change-goods input');

				if ( input.val() !== 0 ) {

					input.css('borderColor', '#23aba7');

				} else {

					input.css('borderColor', '#aaa');

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
	var mmGoodsView = Backbone.View.extend({

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
			var total = 0;

			this.collection.each( function( model ) {
				total += model.get('count');
			});

			if ( total === 0 ) {
				this.paragraf.closest('.shopping-cart-inner').css('opacity', '.5');
				this.paragraf.text('Нет товаров в корзине');
			} else {
				this.paragraf.closest('.shopping-cart-inner').css('opacity', '1');
				this.paragraf.html('<p>Количество товаров: <span data="totalSize">'+total+'</span></p>');
			}

		}

	});