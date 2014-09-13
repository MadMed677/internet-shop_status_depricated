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
$authorPhone = '8(921)86-36-937';

$siteEmail = 'mmvpunke@gmail.com';

$vk = '';

if ( $post ) {

	$email = htmlspecialchars( stripslashes( $_POST['email'] ) );
	$name = htmlspecialchars( stripslashes( $_POST['name'] ) );
	$phone = htmlspecialchars( stripslashes( $_POST['phone'] ) );

	if ( isset( $_POST['vk'] ) )
		$vk = htmlspecialchars( stripslashes( $_POST['vk'] ) );

	$total_price = 0;

	$json = json_decode( $_POST['json'] );
	$total_price = 0;
	$total_count = 0;

	$total_price_me = 0;

	$subject = 'Ваш заказ на сайте vPunke';
	$error = '';

	// Email to user
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
						<li> Email: '. $siteEmail .'</li>
						<li> Vk: '. $authorVk .'</li>
						<li> Телефон: '. $authorPhone .'</li>
					</ul>';

					foreach ( $json as $object ) {
						$message .= '<div>';
							$message .= '<div style="float: left; width: 24%; margin-right: 1%; font-weight: bold;">Название</div>';
							$message .= '<div style="float: left; width: 24%; margin-right: 1%; font-weight: bold;">Количество</div>';
							$message .= '<div style="float: left; width: 24%; margin-right: 1%; font-weight: bold;">Цена</div>';
							$message .= '<div style="float: left; width: 25%; font-weight: bold;">Стоимость</div>';
						$message .= '</div>';

						$message .= '<div style="padding-bottom: 10px; overflow: hidden; clear: both;">';
						foreach ( $object as $key => $value ) {
							$message .= '<div style="margin-bottom: 10px; float: left; width: 24%; margin-right: 1%;">';
							if ( $key === 'title' ) {

								$first_title = 'Название: ';

							} elseif ( $key === 'img' ) {
								
								continue;

							} elseif ( $key === 'firm' ) {
								
								$first_title = 'Производитель: ';
								continue;

							} elseif ( $key === 'count' ) {
								
								$first_title = 'Количество: ';
							
							} elseif ( $key === 'price' ) {
							
								$first_title = 'Цена: ';
							
							} elseif ( $key === 'totalPrice' ) {
							
								$total_price += $value;
								continue;
							
							}
							
							$message .= $value;
							$message .= '</div>';
						}
						$message .= '</div>';
					}

					$message .= '<div style="text-align: center;">Итоговая цена: <span style="color: #22aba6">'. $total_price .'</span> рублей</div>';

		$message .= "</div></body></html>";

	// Email to me
	$message2 = "
		<html>
			<head>
				<title>$subject</title>
				<link href='http://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
			</head>
			<body style='font: 300 1em Roboto'>
				<div class='wrapper' style='max-width: 700px; margin: 0 auto;'>";

					$message2 .= 'Пользователь <span style="color: #22aba6">'.
										$name
								.'</span> с телефоном <span style="color: #22aba6">'.
										$phone
								.'</span>';
								
					if ( strlen($vk) !== 0 )
						$message2 .= ' ссылка в VK <span style="color: #22aba6">'. $vk .'</span>';

					$message2 .= '. Оформил заказ.<br>';

					foreach ( $json as $object ) {
						$message2 .= '<div style="padding-bottom: 10px; border-bottom: 1px solid #22aba6;">';
						foreach ( $object as $key => $value ) {
							$message2 .= '<div style="margin-bottom: 10px;">';
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
							
								continue;
							
							}
							
							$message2 .= '<div style="clear: both; float: left; width: 45%; margin-right: 5%;">'.$first_title .'</div><div style="float: left; width: 50%;">'.$value.'</div>';
							$message2 .= '</div>';
						}
						$message2 .= '</div>';
					}

					$message2 .= '<div style="text-align: center;">Итоговая цена: <span style="color: #22aba6; margin-bottom: 20px;">'. $total_price .'</span> рублей</div>';

		$message2 .= "</div></body></html>";

	if ( !ValidateEmail( $email ) ) {
		$error = 'Your email is wrong!';
	}

	$message = wordwrap($message, 70);

	if ( !$error ) {
		$mail = mail( $email, $subject, $message,
				"From: ".$name." <".$email.">\r\n"
				."Reply-To: ".$email."\r\n"
				."Content-type: text/html; charset=utf-8 \r\n"
				."X-Mailer: PHP/" . phpversion()
		);

		$mail2 = mail( $siteEmail, $subject, $message2,
				"From: ".$name." <".$email.">\r\n"
				."Reply-To: ".$email."\r\n"
				."Content-type: text/html; charset=utf-8 \r\n"
				."X-Mailer: PHP/" . phpversion()
		);

		if ( $mail && $mail2 ) echo 'ok';
	} else {
		echo '<div class="bg-error">' . $error . '</div>';
	}

}