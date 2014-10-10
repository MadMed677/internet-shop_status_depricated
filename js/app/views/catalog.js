define([

    'jquery',
    'backbone',
    'app/collections/gondons',
    'app/templates',
    'app/views/condoms',
    'app/views/baskets',
    'app/functions/basketCart'

], function($, Backbone, GondonsCollection, Templates, GondonsView, BasketsView, BasketCart) {

    var CatalogView = Backbone.View.extend({

        id: 'condoms-wrapper',

        html: [
            '<div class="margin-top" id="catalog-page">',
                '<div class="container">',
                    '<h3 class="text-center">Каталог товаров</h3>',
                    '<div id="all-condoms"></div>',
                '</div>',
            '</div>'
        ].join(''),

        events: {
            'click #basket-view': 'basketView'
        },

        basketView: function(event) {
            // var modal = new BasketsView({
            //     collection: this.collection
            // });
            // modal.show();
        },

        template: Templates['gondon'],

        initialize: function() {

            // Рендерим наш вид
            this.$el.html( this.html );

            // Кешируем переменные
            this.$condoms = this.$('#all-condoms');

            // Создаем новый экземпляр коллекции
            this.collection = new GondonsCollection();

            // this.collection.create({ title: 'Презерватив 1' });

            // Подтягиваем информацию из localStorage
            this.collection.fetch();

            // Создаем вид коллекции
            this.$gondonsView = new GondonsView({ collection: this.collection });

            // Создаем вид корзины
            window.app.basketCart = new BasketCart({ collection: this.collection });

        },

        render: function() {

            window.app.basketCart.render();

            // Рендер вида коллекции и вставлка в $('#all-condoms')
            this.$condoms.html( this.$gondonsView.render().el );

            this.$basketView = $('#basket-view');

            return this;
        }

    });

    return CatalogView;
});
