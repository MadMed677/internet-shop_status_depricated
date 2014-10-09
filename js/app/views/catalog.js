define([

    'jquery',
    'backbone',
    'app/collections/gondons',
    'app/templates',
    'app/views/condoms',
    'app/views/baskets'

], function($, Backbone, GondonsCollection, Templates, GondonsView, BasketsView) {

    var CatalogView = Backbone.View.extend({

        id: 'condoms-wrapper',

        html: [
            '<nav class="navbar navbar-default navbar-fixed-top">',
                '<div class="container">',
                    '<div class="navbar-header" id="basket-view">Hello</div>',
                '</div>',
            '</nav>',
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
            console.log('click on basketView');
            var modal = new BasketsView({
                title: 'Корзина товаров 2',
                id: 'modal-basket-view',
                collection: this.collection
            });
            modal.show();

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

            window.debug = {
                condoms: this.collection
            };
        },

        render: function() {

            // Рендер вида коллекции и вставлка в $('#all-condoms')
            this.$condoms.html( this.$gondonsView.render().el );

            return this;
        }

    });

    return CatalogView;
});
