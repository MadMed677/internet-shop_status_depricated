
</div>
	<!-- Вывеска корзины с товарами -->
	<div id="shopping-cart" class="animated">
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
	<div id="dark-block">
		<div id="main-basket">
			<div class="close-block"><span class="fa fa-times"></span></div>
			<div id="basket-inner">
				<h3>Ваши товары</h3>
				<div id="main-basket-goods">
					<!-- <div class="basket-goods">

						Каталог товаров
						
					</div> -->
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
					<h3>Ваши данные</h3>
					<div class="form-col form-name">
						<div class="form-offset-2 form-col-3">
							<label for="name">Ваше имя*</label>
						</div>
						<div class="form-col-4">
							<input type="text" placeholder="Иван Иванов" name="name" id="name">
						</div>
					</div>
					<div class="form-col form-telephone">
						<div class="form-offset-2 form-col-3">
							<label for="phone">Телефон*</label>
						</div>
						<div class="form-col-4">
							<input type="phone" placeholder="89210001122" name="phone" id="phone">
						</div>
					</div>
					<div class="form-col">
						<div class="form-offset-2 form-col-3">
							<label for="email">Email*</label>
						</div>
						<div class="form-col-4 form-email">
							<input type="email" placeholder="Email" name="email" id="email">
						</div>
					</div>
					<div class="form-col">
						<div class="form-offset-2 form-col-3">
							<label for="vk">VK</label>
						</div>
						<div class="form-col-4 form-email">
							<input type="text" placeholder="Vk" name="vk" id="vk">
						</div>
					</div>
					<div class="form-offset-4 form-submit">
						<button id="buttonSending" class="continue-buy" type="submit" disabled="disabled"><i class="fa fa-envelope-o"></i>Заказать</button>
						<button class="back-buy"><i class="fa fa-shopping-cart" type="button"></i>Продолжить покупки</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<!-- Dark Block -->
	<!-- <div class="dark-block"></div> -->

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
			<div class="change-description">
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
			<% if (specifications.length === 0) { %>
				<img src="" alt="">
			<% }%>
		</div>
		<div class="inner-catalog-fishki">
			<% _.each( icons, function( srcImg ) { %>
				<img src="images/icons/fishki/<%= srcImg %>.png" alt="">
			<% }); %>
			<% if (icons.length === 0) { %>
				<img src="" alt="">
			<% }%>
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
				<span class="fa fa-times decorative"></span>
				<span data-price="price"><%= price %><i class="fa fa-rub fa-nope"></i></span>
				<span class="decorative faequal">=</span>
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
	<script src="http://maps.api.2gis.ru/2.0/loader.js?pkg=full" data-id="dgLoader"></script>
	<script src="dist/scripts.min.js"></script>
	<!-- <script src="js/jquery.js"></script>
	<script src="js/jquery.easing.js"></script>
	<script src="js/waypoints.js"></script>
	<script src="js/jquery.classywiggle.min.js"></script>
	<script src="js/offline.min.js"></script>
	<script src="js/2gismap.js"></script>
	<script src="js/mmPlugins.js"></script>
	<script src="js/main.js"></script>
	<script src="js/headerScroller.js"></script>
	<script src="js/onLoad.js"></script>
	<script src="js/catalogImages.js"></script>
	<script src="js/underscore.js"></script>
	<script src="js/backbone.js"></script>
	<script src="js/backbone.localStorage-min.js"></script>
	<script src="js/modelCollection.js"></script>
	<script src="js/view.js"></script>
	<script src="js/waypointanimation.js"></script>
	<script src="js/init.js"></script>
	<script src="js/basketCart.js"></script>
	<script src="js/changeForm.js"></script> -->
</body>
</html>