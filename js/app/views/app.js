define([

    'jquery',
    'backbone',
    'app/functions/pageLoad'

], function($, Backbone, pageLoad) {

    var AppView = Backbone.View.extend({

        el: 'body',

        events: {
            'click a': 'linkClick'
        },

        initialize: function() {
            this.$wrap = $('#wrap');
        },

        linkClick: function(event) {
            // event.preventDefault();
            console.log( $(event.target).attr('href') );
        },

        setPage: function(page) {
            this.$('.nav li').removeClass('active');
            this.$('#nav-'+page).addClass('active');
            pageLoad(page);
        }

    });

    return AppView;
});
