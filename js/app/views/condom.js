define([

    'jquery',
    'backbone',
    'app/templates'

], function($, Backbone, Templates) {

    var CondomView = Backbone.View.extend({

        className: 'one-condom',

        template: Templates['gondon'],

        events: {
            'click .changeCount': 'changeCount',
            'click .condom-icon': 'changeSize',
            'keyup input': 'validateInput'
        },

        // ------------------------------------
        // -------------- Events --------------
        // ------------------------------------
        changeCount: function(event) {
            var diff = $(event.target).closest('a').data('diff');
			var count = this.model.get('count');

			this.model.save({
				'count': count + diff
			}, { validate: true });

			event.preventDefault();
        },

        changeSize: function(event) {
            $(event.target).closest('.condom-size-box').find('.condom-icon').removeClass('active');
            $(event.target).closest('.condom-icon').addClass('active');
        },

        validateInput: function() {
            console.log('validateInput');
        },

        // ------------------------------------
        // ---------- Main Functional ---------
        // ------------------------------------
        initialize: function() {
            this.listenTo( this.model, 'change', this.render );
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );

            return this;
        }

    });

    return CondomView;
});
