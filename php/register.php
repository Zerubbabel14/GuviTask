<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');


// Create connection
$conn = new mysqli('localhost', 'root', '','guvi');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data sent via AJAX
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
// Escape user inputs for security
$username = $conn->real_escape_string($username);
$email = $conn->real_escape_string($email);
// Check if username or email already exists
$sql = "SELECT * FROM register WHERE username = ? OR email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Username or email already exists, raise an error
    echo "Error: Username or email already exists.";
} else {
    // Username and email are unique, proceed with registration

    // Hash the password (you should use more secure methods like bcrypt in production)
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Prepare and bind SQL statement using prepared statement
    $sql = "INSERT INTO register (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $passwordHash);

    // Execute the SQL statement
    if ($stmt->execute()) {
        echo "Registration successful.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}
$conn->close();
?>