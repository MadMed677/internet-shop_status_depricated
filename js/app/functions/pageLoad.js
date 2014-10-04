define([

    'jquery'

], function($) {

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
            },
            error: function() {
                html = '';
            }
        });
    }


    return pageLoad;
});
