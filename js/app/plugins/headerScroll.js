define([

], function() {

    var initialize = function() {

        // ---------------------------------
        // Navigation fixed and minimalizend
        // ---------------------------------

        $(window).on( 'scroll', function() {
            if ( $(this).scrollTop() >= 300 ) {
                $('.navbar-mm, .nav-basket-view').addClass('minimaze');
            } else {
                $('.navbar-mm, .nav-basket-view').removeClass('minimaze');
            }
        });

    };

    return {
        initialize: initialize
    };
});
