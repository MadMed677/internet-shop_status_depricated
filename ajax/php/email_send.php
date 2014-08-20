<?php

function ValidateEmail( $value ) {
	$regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

	if ( $value === '' ) return false;
	else $string = preg_replace($regex, '', $value);

	return empty($string) ? true : false;
}

$post = ( !empty( $_POST ) ) ? true : false;
$authorName = 'Артем Анашев';
$authorEmail = 'vpunke@gmail.com';
$authorVk = 'http://vk.com/madmed677';

if ( $post ) {

	$email = htmlspecialchars( stripslashes( $_POST['email'] ) );
	$name = htmlspecialchars( stripslashes( $_POST['name'] ) );
	$total_price = 0;

	$json = json_decode( $_POST['json'] );
	$total_price = 0;
	$total_count = 0;

	$subject = 'Ваш заказ на сайте vPunke';
	$error = '';
	$message = "
		<html>
			<head>
				<title>$subject</title>
				<link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
				<style>
					body {						
						background: url(http://subtlepatterns.com/patterns/sativa.png) top left repeat;
					}

					.wrapper {
						max-width: 700px;
						margin: 0 auto;
						overflow: hidden;
						font: 300 1em 'Lato', 'PT Sans', sans-serif;
					}

					.good {
						border-bottom: 1px solid #22aba6;
					}

					.first-column,
					.second-column {
						float: left;
						width: 48%;
					}

					.itog {
						color: #22aba6;
						text-align: center;
						font-size: 1.5em;
					}
				</style>
			</head>
			<body>
				<div class='wrapper'>";

					$message .= 'Привет <span style="color: #22aba6">' . $name . "</span>.<br>";
					$message .= 'Информация о твоем заказе представлена ниже. Если ты обнаружил ошибку, то сообщи о ней мне в ближайшее время одним из способов:<br>';
					$message .= '<ul>
						<li> Email: '. $authorEmail .'</li>
						<li> Vk: '. $authorVk .'</li>
					</ul>';

					foreach ( $json as $object ) {
						$message .= '<div class="good">';
						foreach ( $object as $key => $value ) {
							$message .= '<div class="good-row">';
							if ( $key === 'title' ) {

								$first_title = 'Название: ';

							} elseif ( $key === 'img' ) {
								
								continue;

							} elseif ( $key === 'firm' ) {
								
								$first_title = 'Производитель: ';

							} elseif ( $key === 'count' ) {
								
								$first_title = 'Количество: ';
							
							} elseif ( $key === 'price' ) {
							
								$first_title = 'Цена: ';
							
							} elseif ( $key === 'totalPrice' ) {
							
								$total_price += $value;
								continue;
							
							}
							
							$message .= '<div class="first-column">'.$first_title .'</div><div class="second-column">'.$value.'</div>';
							$message .= '</div>';
						}
						$message .= '</div>';
					}

					$message .= '<div class="itog">Итоговая цена: '. $total_price .' рублей</div>';

$message .= "</div></body></html>";

	if ( !ValidateEmail( $email ) ) {
		$error = 'Your email is wrong!';
	}

	if ( !$error ) {
		$mail = mail( $email, $subject, $message,
				"From: ".$name." <".$email.">\r\n"
                ."Reply-To: ".$email."\r\n"
                ."Content-type: text/html; charset=utf-8 \r\n"
                ."X-Mailer: PHP/" . phpversion()
		);

		if ( $mail ) echo 'ok';
	} else {
		echo '<div class="bg-error">' . $error . '</div>';
	}

}