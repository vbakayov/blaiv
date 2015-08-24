<?php

require_once "PHPMailerAutoload.php";
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "viktorbakayov@gmail.com"; //sloji si drug usernamer here
$mail->Password = "zzzzz"; //sloji si parolata tuk
$mail->SetFrom("viktorbakayov@gmail.com");
$mail->Subject = "Test";
$mail->Body = "Hurray purvoto suobshtenie prateno ot saita prez gmail do saita na firmata. Ostava i na hosting servara da raboti";
$mail->AddAddress("blaiv@abv.bg"); //destination address
 if(!$mail->Send())
    {
    echo "Mailer Error: " . $mail->ErrorInfo;
    }
    else
    {
    echo "Message has been sent";
    }
?>

