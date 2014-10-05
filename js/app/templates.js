define([

    'underscore'

], function(_) {

    var Templates = [];

    Templates['gondon'] = [
        '<div class="col-md-4 col-sm-6">',
            '<h4 class="text-center">Заголовок презерватива</h4>',
            '<img src="images/catalog/noimage.png" class="img-responsive">',
        '</div>'
    ].join('');

    for ( var tmpl in Templates ) {
        if ( Templates.hasOwnProperty(tmpl) ) {
            Templates[tmpl] = _.template( Templates[tmpl] );
        }
    }

    return Templates;
});
