var mmGoodModel = Backbone.Model.extend({

	defaults: {
		title: 'Нет названия',
		img: 'loading/loader1.gif',
		description: 'Нет описания',
		firm: 'Нет фирмы',
		icons: [],
		specifications: [],
		count: 0,
		price: 150,
		totalPrice: 0
	},

	validate: function( attributes ) {
		if ( !attributes.title )
			return 'Введите название товара';
		if ( !attributes.img )
			return 'Должна быть картинка по умолчанию';
		if ( attributes.count < 0 )
			return 'Количество товара должно быть больше нуля';
		if ( attributes.count > 100 )
			return 'Ну зачем вы издеваетесь?!';
	}

});

var mmGoodsCollection = Backbone.Collection.extend({

	model: mmGoodModel,

	localStorage: new Backbone.LocalStorage('goods')

});