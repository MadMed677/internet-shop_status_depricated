define([

    'jquery',
    'app/plugins/bxSlider',
    'app/plugins/waypoint',
    'mmPlugins',
    'app/functions/map'

], function($, bxSlider, waypoint, mmPlugins, map) {

    function pageLoad(page, view) {

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

                    if ( page.indexOf('index') !== -1 ) {
                        bxSlider.initialize();
                        waypoint.initialize();
                        map();
                    } else if ( page.indexOf('catalog') !== -1 ) {
                        $wrap.html( view['catalog'].render().el );
                    }

                }
                // Если был переход по странице
                else {
                    $wrap.mmSlider(700, data, function() {
                        if ( page.indexOf('index') !== -1 ) {
                            bxSlider.initialize();
                            waypoint.initialize();
                            map();
                        } else if ( page.indexOf('catalog') !== -1 ) {
                            view['catalog'].render();
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
