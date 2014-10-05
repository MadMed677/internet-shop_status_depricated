define([

], function() {

    var initialize = function() {

        // ---------------------------------
        // Navigation fixed and minimalizend
        // ---------------------------------

        $(window).on( 'scroll', function() {
            if ( $(this).scrollTop() >= 300 ) {
                $('.navbar-mm').addClass('minimaze');
            } else {
                $('.navbar-mm').removeClass('minimaze');
            }
        });

    };

    return {
        initialize: initialize
    };
});
