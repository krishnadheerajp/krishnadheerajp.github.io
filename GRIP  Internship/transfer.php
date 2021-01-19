<?php
session_start();
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=internship', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$_SESSION['currentsl']=$_GET['currentsl'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles2.css">
    <title>Sender's Info</title>
</head>
<body>
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
      <div style=" margin-top:15px; margin-left:15px; font-weight: bolder;font-size: 30px;color: green ;"> <p> Please confirm the details of sender to proceed:</p> </div>
<?php          
           $stmt = $pdo->query("SELECT * FROM customers WHERE Sno =".$_SESSION['currentsl']); 
           $row = $stmt->fetch(PDO::FETCH_ASSOC);
          echo "<h3 style='margin-left:15px'>Name : ".$row['Name']."</h3>";
          echo "<h3 style='margin-left:15px'>Email : ".$row['Email']."</h3>";
          echo "<h3 style='margin-left:15px'>Account Number : ".$row['Account Number']."</h3>";
          echo "<h3 style='margin-left:15px'>Balance : ".$row['Balance']."</h3>";
 ?>
            <?php echo' <a href="transfered.php" id="button" style=" margin-left:15px; font-weight:bolder; font-size:25px; background-color:silver; border-radius:5px; padding:5px ">Proceed</a>'; ?>
        </body>
</html>