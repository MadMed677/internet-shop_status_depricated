define([

    'jquery',
    'backbone',
    'app/views/baskets'

], function($, Backbone, GoodsView) {

    var BasketView = Backbone.View.extend({

        html: [
            '<nav class="nav-basket-view navbar-fixed-top animated isHidded">',
                '<div class="container">',
                    '<div class="navbar-header pull-right" id="basket-view">',
                        '<div class="to-span navbar-icon">',
                            '<i class="fa fa-shopping-cart"></i>',
                        '</div>',
                        '<div class="to-span navbar-cont">',
                            '<span>Корзина товаров</span>',
                            '<p>Товаров <span data="total-count">0</span>. Итого: <span data="total-price">0</span><i class="fa fa-rub fa-little"></i></p>',
                        '</div>',
                    '</div>',
                '</div>',
            '</nav>'
        ].join(''),

        events: {
            'click #basket-view': 'basketView'
        },

        basketView: function() {
            var modal = new GoodsView({
                collection: this.collection
            });
            modal.show();
        },

        initialize: function() {
            this.$navbar = $('.navbar-mm');
            this.$navBasket = $('.nav-basket-view');
        },

        render: function() {
            // Вставляем наш шаблон
            this.$el.html( this.html );
            this.$navbar.after( this.el );
            this.$navBasket = $('.nav-basket-view').removeClass('fadeOutLeft').addClass('fadeInRight');

            // Кешируем переменные
            this.$count = this.$('span[data="total-count"]');
            this.$price = this.$('span[data="total-price"]');
            this.$navbarCont = this.$('.navbar-cont > p');

            this.changeValues();

            return this;
        },

        changeValues: function() {
            var totalPrice = 0,
                totalCount = 0;

            this.collection.each( function( condom ) {
                totalCount += condom.get('count');
                totalPrice += condom.get('price') * condom.get('count');
            });


            if ( totalCount === 0 ) {
                this.$('#basket-view').css('opacity', 0.5);
                this.$navbarCont.html('<h4>Товаров нет</h4>');
            } else {
                this.$('#basket-view').css('opacity', 1);
                this.$navbarCont.html('<p>Товаров <span data="total-count">'+ totalCount +'</span>. Итого: <span data="total-price">'+ totalPrice +'</span><i class="fa fa-rub fa-little"></i></p>');
            }
        },

        uninitialize: function() {
            var that = this;

            if ( this.$navBasket ) {
                this.$navBasket.removeClass('fadeInRight').addClass('fadeOutLeft');
                setTimeout(function() {
                    that.$navBasket.remove();
                }, 500);
            }
        }

    });

    return BasketView;
});
