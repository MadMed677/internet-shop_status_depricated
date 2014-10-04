define([
    'jquery',
    'underscore',
    'backbone',
    'async!http://maps.google.com/maps/api/js?sensor=false'
],function($, _, Backbone){

  var Map = Backbone.View.extend({

    _map: null,

    render: function(){

      this.map = new google.maps.Map(this.el,{
        zoom:16,
        center: new google.maps.LatLng(43.81451767218152, -91.25057458877563),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      return this;

    }

  });

    return Map;
});
