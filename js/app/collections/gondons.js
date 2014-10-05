define([

    'backbone',
    'app/models/gondon',
    'backbone.localStorage'

], function(Backbone, GondonModel) {

    var GondonsCollection = Backbone.Collection.extend({

        model: GondonModel,

        localStorage: new Backbone.LocalStorage('Gondons')

    });

    return GondonsCollection;
});
