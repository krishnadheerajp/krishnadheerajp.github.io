<?php
session_start();
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=internship', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->query("SELECT * FROM customers WHERE Sno=".$_GET['receiversl']);
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$receivername=$row['Name'];
$receiveramount=$row['Balance']+$_SESSION['amount'];
$stmt=$pdo->query("update customers set Balance=$receiveramount where Sno=".$_GET['receiversl']);


$stmt = $pdo->query("SELECT * FROM customers WHERE Sno=".$_SESSION['currentsl']);
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$sendername=$row['Name'];
$senderamount=$row['Balance']-$_SESSION['amount'];
$stmt=$pdo->query("update customers set Balance=$senderamount where Sno=".$_SESSION['currentsl']);
$_SESSION['deladd']="Money was transferred successfully.";
$pdo->query("insert into transferinfo values ('".$sendername."','".$receivername."','".$_SESSION['amount']."')");
header("Location:customers.php");
?>