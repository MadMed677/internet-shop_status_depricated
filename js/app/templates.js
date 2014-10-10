define([

    'underscore'

], function(_) {

    var Templates = [];

    Templates['gondon'] = [
        '<div class="col-md-4 col-sm-6 condom-view">',
            '<h4 class="text-center"><%= title %></h4>',
            '<img src="images/catalog/<%= img %>" class="img-responsive">',
            '<h4 class="condom-firm"><%= firm %></h4>',
            '<p><%= description %></p>',
            '<div class="row margin-bottom">',
                '<div class="col-xs-4">',
                    '<% _.each( flavor, function(srcImg) { %>',
                        '<img src="images/icons/flavor/<%= srcImg %>">',
                    '<% }) %>',
                    '<% if ( flavor.length === 0 ) { %>',
                        '<p>Нет вкуса</p>',
                    '<% } %>',
                '</div>',
                '<div class="col-xs-4">',
                    '<% _.each( specific, function(srcImg) { %>',
                        '<img src="images/icons/specific/<%= srcImg %>">',
                    '<% }) %>',
                    '<% if ( specific.length === 0 ) { %>',
                        '<p>Простой презерватив</p>',
                    '<% } %>',
                '</div>',
                '<div class="col-xs-4 text-center condom-size-box">',
                    '<% _.each( size, function(si) { %>',
                        '<div class="condom-icon">',
                            '<span><%= si %></span>',
                        '</div>',
                    '<% }) %>',
                    '<% if ( size.length === 0 ) { %>',
                        '<p>Размеры не известны</p>',
                    '<% } %>',
                '</div>',
            '</div>',
            '<div class="row">',
                '<div class="col-sm-6 col-sm-offset-2 text-center">',
                    '<a class="changeCount" data-diff="-1" href="#">',
                        '<i class="fa fa-minus"></i>',
                    '</a>',
                    '<input type="text" value="<%= count %>">',
                    '<a class="changeCount" data-diff="1" href="#">',
                        '<i class="fa fa-plus"></i>',
                    '</a>',
                '</div>',
                '<div class="col-sm-4 text-center">',
                    '<span class="condom-price col-sm-push-right"><%= price %>',
                        '<i class="fa fa-rub"></i>',
                    '</span>',
                    '<div class="clearfix"></div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    Templates['modal'] = [
        '<div class="modal fade">',
            '<div class="modal-dialog">',
                '<div class="modal-content">',
                    '<div class="modal-header">',
                        '<button type="button" class="close" data-dismiss="modal">',
                            '<span aria-hidden="true">&times;</span>',
                        '</button>',
                        '<h4 class="modal-title text-center"><%= title %></h4>',
                    '</div>',
                    '<div class="modal-body"></div>',
                    '<div class="clearfix"></div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    Templates['basket'] = [
        '<div class="col-md-4 col-sm-6 condom-view">',
            '<h4 class="text-center"><%= title %></h4>',
            '<img src="images/catalog/<%= img %>" class="img-responsive">',
            '<h4 class="condom-firm"><%= firm %></h4>',
            '<p><%= description %></p>',
            '<div class="row margin-bottom">',
                '<div class="col-xs-4">',
                    '<% _.each( flavor, function(srcImg) { %>',
                        '<img src="images/icons/flavor/<%= srcImg %>">',
                    '<% }) %>',
                    '<% if ( flavor.length === 0 ) { %>',
                        '<p>Нет вкуса</p>',
                    '<% } %>',
                '</div>',
                '<div class="col-xs-4">',
                    '<% _.each( specific, function(srcImg) { %>',
                        '<img src="images/icons/specific/<%= srcImg %>">',
                    '<% }) %>',
                    '<% if ( specific.length === 0 ) { %>',
                        '<p>Простой презерватив</p>',
                    '<% } %>',
                '</div>',
                '<div class="col-xs-4 text-center condom-size-box">',
                    '<% _.each( size, function(si) { %>',
                        '<div class="condom-icon">',
                            '<span><%= si %></span>',
                        '</div>',
                    '<% }) %>',
                    '<% if ( size.length === 0 ) { %>',
                        '<p>Размеры не известны</p>',
                    '<% } %>',
                '</div>',
            '</div>',
            '<div class="row">',
                '<div class="col-sm-6 col-sm-offset-2 text-center">',
                    '<a class="changeCount" data-diff="-1" href="#">',
                        '<i class="fa fa-minus"></i>',
                    '</a>',
                    '<input type="text" value="<%= count %>">',
                    '<a class="changeCount" data-diff="1" href="#">',
                        '<i class="fa fa-plus"></i>',
                    '</a>',
                '</div>',
                '<div class="col-sm-4 text-center">',
                    '<span class="condom-price col-sm-push-right"><%= price %>',
                        '<i class="fa fa-rub"></i>',
                    '</span>',
                    '<div class="clearfix"></div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    for ( var tmpl in Templates ) {
        if ( Templates.hasOwnProperty(tmpl) ) {
            Templates[tmpl] = _.template( Templates[tmpl] );
        }
    }

    return Templates;
});
