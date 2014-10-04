;(function($) {

    $.fn.mmSlider = function(speed, data, callback) {

        speed = speed || 500;

        var that = this;

        this
            .removeClass('fadeInUp')
            .animate({
                'opacity': 0,
                'paddingTop': '50px'
            }, speed, function() {
                that
                    .html(data)
                    .animate({
                        'opacity': 1,
                        'paddingTop': '0'
                    }, speed, function() {
                        if (callback) callback.apply(this, arguments);
                    });
            });

        return this;
    };

})(jQuery);
