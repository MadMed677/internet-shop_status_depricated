define([
    'jquery',
    'async!http://maps.googleapis.com/maps/api/js?key=AIzaSyAb2U6Z2wqCO1D5att83_YFpVJUWH3JYqM&sensor=true'
], function($) {

    function map() {

        var latlng = new google.maps.LatLng(59.875614, 29.825623);

        var options = {
            center: latlng,
            zoom: 17,
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: false
        };

        var element = $('#wrap').find('#map');

        var vpunke = new google.maps.Map(element[0], options);
        var marker = new google.maps.Marker({
            position: latlng,
            map: vpunke
        });
    }

    return map;
});
