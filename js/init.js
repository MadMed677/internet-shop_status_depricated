var mmGoods = (function() {
	
	return {

		initialize: function() {
			var goodModel = new mmGoodModel();
			var goodsCollection = new mmGoodsCollection();
			goodsCollection.add([
				{
					title: 'Название товара 1',
					img: 'slider1.png',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quis neque recusandae, quia laborum exercitationem. Illum quod modi vel amet et quidem ducimus, eligendi iusto vero eaque repudiandae esse odio dolorum sint reprehenderit recusandae sed, rerum fuga id facere voluptatibus, doloremque qui? Ipsum possimus, ullam, impedit assumenda laborum temporibus. Obcaecati.',
					firm: 'Нет фирмы',
					icons: ['banana'],
					count: 0
				},
				{
					title: 'Заголовок 2',
					count: 0,
					icons: ['strawberry'],
					price: 170
				},
				{
					price: 340
				}
			]);

			var goodViewCollectionCart = new mmGoodsViewCart({ collection: goodsCollection });
			var goodViewCollection = new mmGoodsView({ collection: goodsCollection });

			$('.basket-goods').append( goodViewCollectionCart.render().el );
			$('.catalog-items').append( goodViewCollection.render().el );
		}
	};

})();