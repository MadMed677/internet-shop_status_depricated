define([

    'jquery',
    'backbone',
    'app/collections/gondons',
    'app/templates'

], function($, Backbone, GondonsCollection, Templates) {

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
            // Кешируем переменные
            this.$condoms = this.$('#all-condoms');

            this.collection = new GondonsCollection();
            this.listenTo( this.collection, 'change', this.render );
            this.collection.fetch();
        },

        render: function() {

            var html = this.template();
            this.$el.html( html );

            return this;
        }

    });

    return CatalogView;
});
