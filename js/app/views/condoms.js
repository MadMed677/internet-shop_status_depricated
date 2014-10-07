define([

    'jquery',
    'backbone',
    'app/templates',
    'app/views/condom'

], function($, Backbone, Templates, CondomView) {

    var CondomsView = Backbone.View.extend({

        // Функции
        addOne: function(condom) {
            // Создание модели и добавление ее в вид коллекции append'ом
            var condomView = new CondomView({ model: condom });
            this.$el.append( condomView.render().el );
        },

        initialize: function() {
            // Установка "прослушек"
            this.collection.on('add', this.addOne, this);

            // this.collection.on('change', this.changeTotalCount, this);
        },

        render: function() {
            // Очищаем наш вид, перед добавлением моделей append'ом
            this.$el.html('');

            // Перебираем циклом наши модели и делаем их вид
            this.collection.each( this.addOne, this );

            return this;
        }

    });

    return CondomsView;
});
