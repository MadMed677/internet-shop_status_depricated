define([

    'jquery',
    'backbone',
    'app/functions/pageLoad',
    'app/views/catalog'

], function($, Backbone, pageLoad, CatalogView) {

    var AppView = Backbone.View.extend({

        el: 'body',

        events: {
            'click a': 'linkClick'
        },

        views: {},

        initialize: function() {
            this.$wrap = $('#wrap');

            this.views['catalog'] = new CatalogView({
                id: 'page-catalog',
                className: 'page-view'
            });
        },

        linkClick: function(event) {
            // event.preventDefault();
            console.log( $(event.target).attr('href') );
        },

        setPage: function(page) {
            this.$('.nav li').removeClass('active');
            this.$('#nav-'+page).addClass('active');
            pageLoad(page, this.views);
        }

    });

    return AppView;
});
