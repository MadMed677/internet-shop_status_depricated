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
                            '<p>Товаров <span data="total-size">0</span>. Итого: <span data="total-price">0</span><i class="fa fa-rub fa-little"></i></p>',
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
            this.$el.html( this.html );
            this.$navbar.after( this.el );
            this.$navBasket = $('.nav-basket-view').removeClass('fadeOutLeft').addClass('fadeInRight');

            return this;
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
