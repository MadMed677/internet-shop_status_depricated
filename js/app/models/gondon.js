define([

    'backbone'

], function(Backbone) {

    var GondonModel = Backbone.Model.extend({

        defaults: {
            title       : 'Нет названия',
            img         : 'noimage.png',
            description : 'Нет описания',
            firm        : 'Нет фирмы',

            flavor      : [],
            specific    : [],
            size        : ['M','L'],

            count       : 0,
            price       : 0
        },

        validate: function( attributes ) {
            if ( !attributes.title )
                return 'Введите название товара';
            if ( attributes.count < 0  )
                return 'Количество товара должно быть более 0';
            if ( attributes.count > 50 )
                return 'Нельзя заказать так много товара';
            if ( attributes.price < 0 )
                return 'Цена должна быть положительной';
        }

    });

    return GondonModel;
});
