var app = app || {};

var mmGoods = (function() {
	
	return {

		initialize: function() {
			// var goodModel = new mmGoodModel();
			app.goodsCollection = new mmGoodsCollection();
			app.goodsCollection.add([
				{
					title: 'Название товара 1',
					img: 'slider1.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quis neque recusandae, quia laborum exercitationem. Illum quod modi vel amet et quidem ducimus, eligendi iusto vero eaque repudiandae esse odio dolorum sint reprehenderit recusandae sed, rerum fuga id facere voluptatibus, doloremque qui? Ipsum possimus, ullam, impedit assumenda laborum temporibus. Obcaecati.',
					firm: 'Hello',
					icons: ['banana']
				},
				{
					title: 'Название товара 2',
					icons: ['strawberry'],
					price: 170
				},
				{
					title: 'Название товара 3',
					firm: 'Bye bye',
					price: 340
				}
			]);

			if ( !localStorage.getItem('goods') ) {
				app.goodsCollection.each( function( model, index ) {
					model.save({
						'count': model.get('count')
					});
				});
			}

			app.goodsCollection.fetch();

			app.goodViewCollectionCart = new app.mmGoodsViewCart({ collection: app.goodsCollection });
			app.goodViewCollection = new app.mmGoodsView({ collection: app.goodsCollection });

			$('#main-basket-goods').append( app.goodViewCollectionCart.render().el );
			$('.catalog-items').append( app.goodViewCollection.render().el );
		}
	};

})();