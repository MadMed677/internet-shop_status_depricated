define([

    'jquery',
    'app/plugins/bxSlider',
    'app/plugins/waypoint',
    'mmPlugins'

], function($, bxSlider, waypoint, mmPlugins) {

    function pageLoad(page) {

        var html = '',
            $wrap = $('#wrap');

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

                // Если страницы была загружена
                if ( $wrap.html().trim() === '' ) {

                    $wrap
                        .addClass('fadeInUp')
                        .html(data);
                }
                // Если был переход по странице
                else {
                    $wrap.mmSlider(1000, data);
                }

                if ( page.indexOf('catalog') !== 0 ) {
                    bxSlider.initialize();
                    waypoint.initialize();
                }
            },
            error: function() {
                html = '';
            }
        });
    }


    return pageLoad;
});
