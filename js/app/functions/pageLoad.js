define([

    'jquery',
    'app/plugins/bxSlider',
    'app/plugins/waypoint',

], function($, bxSlider, waypoint) {

    function pageLoad(page) {

        var html = '';

        if ( !page ) {
            page = 'layouts/ajax/index.html';
        } else {
            page += '.html';
        }

        page =  'layouts/ajax/' + page;

        $.ajax({
            url: page,
            dataType: 'html',
            success: function(data) {
                html = data;
                $('#wrap')
                    .html(data)
                    .removeClass('fadeInUp')
                    .addClass('fadeInUp');

                bxSlider.initialize();
                waypoint.initialize();
            },
            error: function() {
                html = '';
            }
        });
    }


    return pageLoad;
});
