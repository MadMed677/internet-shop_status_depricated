define([

    'jquery',
    'underscore',
    'backbone',
    'app/views/modal',
    'app/templates'

], function($, _, Backbone, ModalView, Templates) {

    var BasketView = Backbone.View.extend({

        template: Templates['basket'],

        events: {
            'click .changeCount': 'changeCount'
        },

        changeCount: function(event) {
            var diff = $(event.target).closest('a').data('diff'),
                count = this.model.get('count'),
                totalSumm = 0,
                price = this.model.get('price');

            this.model.save({
                'count': count + diff,
                'total': (count + diff)*price
            }, { validate: true });

            event.preventDefault();
        },

        // Главные функции
        initialize: function() {
            this.listenTo( this.model, 'change', this.render );
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            // this.$bodyEl.html( this.template( this.model.toJSON() ) );

            return this;
        }

    });

    return BasketView;
});
