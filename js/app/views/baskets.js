define([

    'jquery',
    'backbone',
    'app/templates',
    'app/views/basket',
    'app/views/modal'

], function($, Backbone, Templates, BasketView, ModalView) {

    var BasketsView = ModalView.extend({

        // el: '',

        options: {
            title: 'Корзина товаров'
        },

        events: {
            'click .apply-order': 'applyOrder'
        },

        // Функции по работе с коллекцией
        applyOrder: function() {
            console.log('applying');

            // совершать ajax запрос, и если он увенчается успехом,
            // то скрывать окно и выводить alert'ом, что заказ успешно оформлен
            // и посмотреть вы его можете на почте

            this.$modalEl.modal('hide');
        },

        // Функции
        addOne: function(condom) {
            if ( condom.get('count') > 0 ) {
                // Создание модели и добавление ее в вид коллекции append'ом
                var basketView = new BasketView({ model: condom });
                this.$bodyEl.append( basketView.render().el );
            } else {
                ++this.noOnBasket;
                if ( this.noOnBasket === this.collectionLength ) {
                    this.$bodyEl.append('<h4 class="text-center text-muted">Нет товаров в корзине.</h4>');
                }
            }
        },

        initialize: function() {
            // Создание переменных для вывода сообщений в $bodyEl
            this.noOnBasket = 0;
            this.collectionLength = this.collection.length;

            // Вызываем метод initialize, чтобы все, что мы объявили в ModalView
            // так же работало тут
            ModalView.prototype.initialize.apply(this, arguments);

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

    return BasketsView;
});
