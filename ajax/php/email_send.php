<?php

function ValidateEmail( $value ) {
	$regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

	if ( $value === '' ) return false;
	else $string = preg_replace($regex, '', $value);

	return empty($string) ? true : false;
}

$post = ( !empty( $_POST ) ) ? true : false;


if ( $post ) {

	$name = 'MadMed677';
	$email = htmlspecialchars( stripslashes( $_POST['email'] ) );
	$json = json_decode( $_POST['json'] );
	$total_price = 0;
	$total_count = 0;

	foreach ( $json as $object ) {
		foreach ( $object as $key => $value ) {
			$col1 = '<div class="first-column">'.$key.'</div><div class="second-column">'.$value.'</div>';
		}
	}

	$subject = 'Ваш заказ на сайте vPunke';
	$error = '';
	$message = "
		<html>
			<head>
				<title>$subject</title>
				<link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
				<style>
					.wrapper {
						max-width: 700px;
						margin: 0 auto;
						outline: 1px solid red;
						overflow: hidden;
						font: 300 1em 'Lato', 'PT Sans', sans-serif;
					}

					.title,
					.value {
						float: left;
						width: 50%;
					}
				</style>
			</head>
			<body>
				<div class='wrapper'>
					$col1
				</div>
			</body>
		</html>
	";

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