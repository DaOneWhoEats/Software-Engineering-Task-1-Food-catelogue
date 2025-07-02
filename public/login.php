<?php
  // Connect to the database
  $servername = "localhost";
  $username = "username";
  $password = "password";
  $dbname = "database_name";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Get the email and password from the form
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Update the email in the database
  $sql = "UPDATE users SET email = '$email' WHERE password = '$password'";
  $conn->query($sql);

  // Close the connection
  $conn->close();
?>