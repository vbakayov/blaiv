/*<?php
if(isset($_POST["submit"])){
//Checking for blank Fields..
if($_POST["vname"]==""||$_POST["vemail"]==""||$_POST["msg"]==""){
echo "Fill All Fields..";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['vemail'];

 // Sanitize e-mail address
 $email =filter_var($email, FILTER_SANITIZE_EMAIL);

 // Validate e-mail address
 $email= filter_var($email, FILTER_VALIDATE_EMAIL);

 if (!$email){
echo "Invalid Sender's Email";
 }
 else{
 $subject = 'ET Blaiv Sait Inquiry';

 $message = $_ZOST['msg'];

 $headers = 'From:'. $email2 . "\r\n"; // Sender's Email


 // message lines should not exceed 70 characters (PHP rule), so wrap it
 $message = wordwrap($message, 70);

 // Send mail by PHP Mail Function
 mail("blaiv@abv.bg", $subject, $message, $headers);
 echo "Your mail has been sent successfuly ! Thank you for your feedback";
 }
}
}
?>

*>