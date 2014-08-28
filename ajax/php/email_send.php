<?php

function ValidateEmail( $value ) {
	$regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

	if ( $value === '' ) return false;
	else $string = preg_replace($regex, '', $value);

	return empty($string) ? true : false;
}

$post = ( !empty( $_POST ) ) ? true : false;
$authorName = 'Артем Анашев';
$authorEmail = 'madmed677@gmail.com';
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
				<link href='http://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
			</head>
			<body style='font: 300 1em Roboto'>
				<div class='wrapper' style='max-width: 700px; margin: 0 auto;'>";

					$message .= 'Привет <span style="color: #22aba6">' . $name . "</span>.<br>";
					$message .= 'Информация о твоем заказе представлена ниже. Если ты обнаружил ошибку, то сообщи о ней мне в ближайшее время одним из способов:<br>';
					$message .= '<ul>
						<li> Email: '. $authorEmail .'</li>
						<li> Vk: '. $authorVk .'</li>
					</ul>';

					foreach ( $json as $object ) {
						$message .= '<div style="padding-bottom: 10px; border-bottom: 1px solid #22aba6;">';
						foreach ( $object as $key => $value ) {
							$message .= '<div style="margin-bottom: 10px;">';
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
							
							$message .= '<div style="clear: both; float: left; width: 45%; margin-right: 5%;">'.$first_title .'</div><div style="float: left; width: 50%;">'.$value.'</div>';
							$message .= '</div>';
						}
						$message .= '</div>';
					}

					$message .= '<div style="text-align: center;">Итоговая цена: <span style="color: #22aba6">'. $total_price .'</span> рублей</div>';

$message .= "</div></body></html>";

	if ( !ValidateEmail( $email ) ) {
		$error = 'Your email is wrong!';
	}

	$email .= ', ' . $authorEmail;

	$message = wordwrap($message, 70);

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