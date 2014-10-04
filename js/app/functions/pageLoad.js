define([

    'jquery',
    'app/plugins/bxSlider',
    'app/plugins/waypoint',
    'mmPlugins',
    'app/functions/map'

], function($, bxSlider, waypoint, mmPlugins, map) {

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

                    if ( page.indexOf('index') !== 0 ) {
                        bxSlider.initialize();
                        waypoint.initialize();
                        map();
                    }

                }
                // Если был переход по странице
                else {
                    $wrap.mmSlider(700, data, function() {
                        if ( page.indexOf('index') !== 0 ) {
                            bxSlider.initialize();
                            waypoint.initialize();
                            map();
                        }
                    });
                }
            },
            error: function() {
                html = '';
            }
        });
    }


    return pageLoad;
});
