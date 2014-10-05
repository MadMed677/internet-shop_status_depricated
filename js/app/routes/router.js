define([

    'backbone'

], function(Backbone) {

    var Router = Backbone.Router.extend({

        routes: {
            ''       : 'goToIndex',
            'index'  : 'goToIndex',
            'catalog': 'goToCatalog',
            'about'  : 'goToAbout'
        },

        initialize: function(view) {
            this.appView = view;
        },

        goToIndex: function() {
            this.appView.setPage('index');
        },

        goToCatalog: function() {
            this.appView.setPage('catalog');
        },

        goToAbout: function() {
            this.appView.setPage('about');
        }

    });

    return Router;
});
