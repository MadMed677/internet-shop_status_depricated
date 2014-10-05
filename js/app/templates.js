define([

    'underscore'

], function(_) {

    var Templates = [];

    Templates['gondon'] = [
        '<div class="col-md-4 col-sm-6">',
            '<h4 class="text-center"><%= title %></h4>',
            '<img src="images/catalog/<%= img %>" class="img-responsive">',
            '<h4 class="condom-firm"><%= firm %></h4>',
            '<p><%= description %></p>',
            '<div class="row">',
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
                '<div class="col-xs-4 text-center">',
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
        '</div>'
    ].join('');

    for ( var tmpl in Templates ) {
        if ( Templates.hasOwnProperty(tmpl) ) {
            Templates[tmpl] = _.template( Templates[tmpl] );
        }
    }

    return Templates;
});
