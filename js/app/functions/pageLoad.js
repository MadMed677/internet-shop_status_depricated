define([

    'jquery',
    'app/plugins/bxSlider',
    'app/plugins/waypoint',
    'app/plugins/headerScroll',
    'mmPlugins',
    'app/functions/map',
    'app/functions/basketCart'

], function($, bxSlider, waypoint, headerScroll, mmPlugins, map, BasketCart) {

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
                // var basketCart = new BasketCart();

                // Если страницы была загружена
                if ( $wrap.html().trim() === '' ) {

                    $wrap
                        .addClass('fadeInUp')
                        .html(data);

                    headerScroll.initialize();

                    if ( page.indexOf('index') !== -1 ) {
                        bxSlider.initialize();
                        waypoint.initialize();
                        map();
                    } else if ( page.indexOf('catalog') !== -1 ) {
                        $wrap.html( view['catalog'].render().el );

                        // basketCart.render();
                    }

                }
                // Если был переход по странице
                else {

                    window.app.basketCart.uninitialize();

                    $wrap.mmSlider(700, data, function() {
                        if ( page.indexOf('index') !== -1 ) {
                            bxSlider.initialize();
                            waypoint.initialize();
                            map();
                        } else if ( page.indexOf('catalog') !== -1 ) {
                            $wrap.html( view['catalog'].render().el );

                            // basketCart.render();
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
