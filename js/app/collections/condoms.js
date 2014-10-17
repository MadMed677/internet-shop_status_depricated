define([

    'backbone',
    'app/models/condom',
    'backbone.localStorage'

], function(Backbone, CondomModel) {

    var CondomsCollection = Backbone.Collection.extend({

        model: CondomModel,

        localStorage: new Backbone.LocalStorage('Gondons')

    });

    return CondomsCollection;
});
