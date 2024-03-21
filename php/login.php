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
$password = $_POST['password'];

// Escape user inputs for security
$username = $conn->real_escape_string($username);

// Prepare SQL statement to retrieve user from database
$stmt = $conn->prepare("SELECT * FROM register WHERE username = ?");
$stmt->bind_param("s", $username);

// Execute SQL statement
$stmt->execute();

// Get result
$result = $stmt->get_result();

// Check if user exists
if ($result->num_rows > 0) {
    // Fetch user data
    $row = $result->fetch_assoc();
    // Verify password
    if (password_verify($password, $row['password'])) {
        echo "Login successful.";
    } else {
        echo "Invalid username or password.";
    }
} else {
    echo "Invalid username or password.";
}

// Close statement and connection
$stmt->close();
$conn->close();
?>