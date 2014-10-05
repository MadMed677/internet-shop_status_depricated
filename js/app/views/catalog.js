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
            // Рендерим наш вид
            this.$el.html( this.html );

            // Кешируем переменные
            this.$condoms = this.$('#all-condoms');

            this.collection = new GondonsCollection();
            // this.collection.create({ title: 'Презерватив 1' });
            this.listenTo( this.collection, 'change', this.render );
            this.collection.fetch();

            window.debug = {
                condoms: this.collection
            };
        },

        render: function() {

            var condomsHtml = [],
                that = this;

            this.collection.each( function(condom, index) {
                condomsHtml.push( that.template( condom.toJSON() ) );
            });

            this.$condoms.html( condomsHtml.join('') );

            return this;
        }

    });

    return CatalogView;
});
