<?php
$host = 'localhost';
$user = 'root';
$pswd = '';
$db = 'test';
$conn=mysqli_connect($host,$user,$pswd,$db);
if(!$conn){
	die('Couldnt connect'.mysqli_connect_error());
}
else{
	echo'Connected succesfully';
}
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];

$sql="INSERT INTO details(firstname,lastname) VALUES ('$firstname','$lastname')";
$rs=mysqli_query($conn,$sql);
if($rs){
	echo'Record added';
}
?>
