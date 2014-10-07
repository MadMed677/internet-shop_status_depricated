define([

    'jquery',
    'backbone',
    'app/collections/gondons',
    'app/templates',
    'app/views/condoms'

], function($, Backbone, GondonsCollection, Templates, GondonsView) {

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
