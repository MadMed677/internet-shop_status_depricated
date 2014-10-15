define([

    'jquery',
    'backbone',
    'app/templates',
    'app/views/basket',
    'app/views/modal'

], function($, Backbone, Templates, BasketView, ModalView) {

    var BasketsView = ModalView.extend({

        html: [
            '<div class="clearfix"></div>',
            '<div class="modal-footer">',
                '<button type="button" class="btn btn-default" data-dismiss="modal" id="continue-buy">Продолжить покупки</button>',
                '<button type="button" class="btn btn-default" id="apply-order">Заказать</button>',
            '</div>'
        ].join(''),

        options: {
            title: 'Корзина товаров'
        },

        events: {
            'click #apply-order': 'applyOrder',
            'click #continue-buy': 'continueBuy'
        },

        // Функции по работе с коллекцией
        applyOrder: function() {
            console.log('applying');

            // совершать ajax запрос, и если он увенчается успехом,
            // то скрывать окно и выводить alert'ом, что заказ успешно оформлен
            // и посмотреть вы его можете на почте

            // this.$modalEl.modal('hide');
        },

        continueBuy: function() {
            console.log('buy');
        },

        // Функции
        addOne: function(condom) {
            if ( condom.get('count') > 0 ) {
                // Создание модели и добавление ее в вид коллекции append'ом
                var basketView = new BasketView({ model: condom });

                // this.$bodyEl.append( basketView.render().el );

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

            this.$bodyEl.after(this.el);
        },

        render: function() {
            // Очищаем наш вид, перед добавлением моделей append'ом
            this.$el.html( this.html );

            // Перебираем циклом наши модели и делаем их вид
            this.collection.each( this.addOne, this );


            return this;
        }

    });

    return BasketsView;
});
