define([

    'jquery',
    'backbone',
    'app/templates',
    'app/views/condom'

], function($, Backbone, Templates, CondomView) {

    var CondomsView = Backbone.View.extend({

        // Functions
        addOne: function(condom) {
            var condomView = new CondomView({ model: condom });
            this.$el.append( condomView.render().el );
        },

        initialize: function() {
            // Listeners
            this.collection.on('add', this.addOne, this);

            // this.collection.on('change', this.changeTotalCount, this);
        },

        render: function() {
            this.collection.each( this.addOne, this );

            return this;
        }

    });

    return CondomsView;
});
