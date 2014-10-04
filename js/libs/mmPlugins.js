;(function($) {

    $.fn.mmSlider = function(speed, data, callback) {

        speed = speed || 500;

        var that = this;

        this
            .removeClass('fadeInUp')
            .animate({
                'opacity': 0,
                'marginTop': '50px'
            }, speed, function() {
                that
                    .html(data)
                    .animate({
                        'opacity': 1,
                        'marginTop': '0'
                    }, speed);
            });

        return this;
    };

})(jQuery);
