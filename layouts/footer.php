
</div>
	<!-- Вывеска корзины с товарами -->
	<div id="shopping-cart">
		<div class="shopping-cart-inner">
			<div class="shopping-cart-blocks">
				<a href="#" class="basket"><h3>Shopping Cart</h3></a>
				<a href="#" class="basket"><p>Товаров: <span data="totalSize">0</span></p></a>
			</div>
			<div class="shopping-cart-icon">
				<a href="#" class="basket"><i class="fa fa-shopping-cart"></i></a>
			</div>
		</div>
	</div>

	<!-- Корзина с товарами -->
	<div id="main-basket">
		<div id="basket-inner">
			<h3>Ваши товары</h3>
			<div class="basket-goods">
				<!-- Каталог товаров -->
			</div>
			<div class="basket-total">
				<div class="basket-itog">
					<p>Итого:</p>
				</div>
				<div class="basket-total-price">
					Количество: <span class="totalCount">0</span>
				</div>
				<div class="basket-total-price">
					Цена: <span class="totalPrice">0</span><i class="fa fa-rub"></i>
				</div>
			</div>
			<form id="sendData" method="post">
				<h4>Форма</h4>
			</form>
		</div>
	</div>

	<!-- Dark Block -->
	<div id="dark-block"></div>

	<!-- FOOTER -->
	<footer id="main-footer">
		<div class="footer">
			<div class="footer-icons">
				<a href="#"><span class="fa fa-twitter"></span></a>
				<a href="#"><span class="fa fa-vk"></span></a>
				<a href="#"><span class="fa fa-facebook"></span></a>
			</div>
			<div class="footer-copy">
				<a href="#"><img src="images/logotype2.png"></a>
				<p>Сделано <a href="#">MadMed677</a> в 2014 году</p>
			</div>
		</div>
	</footer>

</div>

	<!-- Templates -->

	<!-- Template с товаром -->
	<script type="text/template" id="mmGood">
		<div class="inner-catalog-img">
			<img src="images/<%= img %>" alt="">
		</div>
		<div class="inner-catalog-item">
			<h3><%= title %></h3>
			<div>
				<p><%= description %></p>
			</div>
			<div class="change-goods">
				<a class="changeCount" data-diff="-1" href="#"><i class="fa fa-minus"></i></a>
				<input type="text" value="<%= count %>">
				<a class="changeCount" data-diff="1" href="#"><i class="fa fa-plus"></i></a>
			</div>
			<div class="catalog-item-price">			
				<p>Цена: <span><%= price %><i class="fa fa-rub fa-nope"></i></span></p>
			</div>
		</div>
		<div class="inner-catalog-specifications">
			<% _.each( specifications, function( srcImg ) { %>
				<img src="images/icons/specifications/<%= srcImg %>.png" alt="">
			<% }); %>
		</div>
		<div class="inner-catalog-fishki">
			<% _.each( icons, function( srcImg ) { %>
				<img src="images/icons/fishki/<%= srcImg %>.png" alt="">
			<% }); %>
		</div>
		<h4><%= firm %></h4>
	</script>

	<!-- Template с товаром (в корзине) -->
	<script type="text/template" id="mmShopCart">
		<div class="inner-catalog-item">
			<div class="inner-catalog-title">
				<h5><%= title %></h5>
			</div>
			<div class="inner-catalog-goods">
				<a class="changeCount" data-diff="-1" href="#"><i class="fa fa-minus"></i></a>
				<input type="text" value="<%= count %>">
				<a class="changeCount" data-diff="1" href="#"><i class="fa fa-plus"></i></a>
				<span>x</span>
				<span data-price="price"><%= price %><i class="fa fa-rub fa-nope"></i></span>
				<span>=</span>
				<span data-total="total"><%= totalPrice %><i class="fa fa-rub fa-nope"></i></span>
			</div>
		</div>
		<div class="inner-cat-images">
			<div class="inner-cat-specifications">
				<% _.each( specifications, function( srcImg ) { %>
					<img src="images/icons/specifications/<%= srcImg %>.png" alt="">
				<% }); %>
				<% if (specifications.length === 0) { %>
					<img src="" alt="">
				<% }%>
			</div>
			<div class="inner-cat-fishki">
				<% _.each( icons, function( srcImg ) { %>
					<img src="images/icons/fishki/<%= srcImg %>.png" alt="">
				<% }); %>
			</div>
		</div>
		<div class="inner-catalog-firm">
			<p><%= firm %></p>
		</div>
	</script>

	<!-- JavaScript -->
	<script src="js/jquery.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
	<script src="js/jquery.classywiggle.min.js"></script>
	<script src="js/mmPlugins.js"></script>
	<script src="js/main.js"></script>
	<script src="js/headerScroller.js"></script>
	<script src="js/onLoad.js"></script>
	<script src="js/catalogImages.js"></script>
	<script src="js/underscore.js"></script>
	<script src="js/backbone.js"></script>
	<script src="js/modelCollection.js"></script>
	<script src="js/view.js"></script>
	<script src="js/init.js"></script>
	<script src="js/basketCart.js"></script>
</body>
</html>