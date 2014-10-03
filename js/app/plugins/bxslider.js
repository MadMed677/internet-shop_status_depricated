define([

    'jquery',
    'bxSlider'

], function($, bxSlider) {

    var initialize = function() {

        $('.slides').bxSlider({
            controls: false
        });

    };

    return {
        initialize: initialize
    };
});
