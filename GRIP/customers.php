<?php
session_start();
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=internship', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="styles1.css">
    <title>Customers</title>
</head>
<body style="background-color:lightblue">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">APNA Bank</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="customers.php">All Customers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="transactions.php">Transactions</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="matter"> <p> Please select the sender to proceed:</p> </div>
<?php
    if(isset($_SESSION['deladd'])){echo"<div style='color:green;font-size:20px;'>".$_SESSION['deladd']."</div>";unset($_SESSION['deladd']);}
    $stmt = $pdo->query("SELECT * FROM customers");
      print'<table style="background-color:white" class="table table-bordered table-striped table-hover"><tr style="background-color:silver;" class="thead-dark"><th>Customer Name</th><th>Email</th><th>Account Number</th><th>Current Balance</th><th></th></tr>';
      while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
          print "<tr><td>".$row["Name"]."</td><td>".$row["Email"]."</td><td>".$row["Account Number"]."</td><td>".$row['Balance']."<td>
          <a style='color:green; font-weight:bolder; font-size:20px; padding:5px; border-radius:4px; background-color:silver' href='transfer.php?currentsl=".$row["Sno"]."'>Select</a></td></tr>";
      }
?>
</body>
</html>