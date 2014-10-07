define([

    'jquery',
    'backbone',
    'app/templates'

], function($, Backbone, Templates) {

    var CondomView = Backbone.View.extend({

        template: Templates['gondon'],

        events: {
            'click .changeCount': 'changeCount',
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
