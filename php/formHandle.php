<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $power = $_POST["power"];
    $size = $_POST["size"];
    $usage = $_POST["usage"];
    $hours = $_POST["hours"];
    $type = implode(", ", $_POST["type"]);
    $comments = $_POST["comments"];

    // Compose email message
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "Quote Request";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Address: $address\n";
    $message .= "Power Requirement: $power\n";
    $message .= "Size of System: $size\n";
    $message .= "Usage: $usage kW\n";
    $message .= "Percentage Used During Daylight Hours: $hours%\n";
    $message .= "Building Type: $type\n";
    $message .= "Additional Comments:\n$comments";

    // Send email
    $headers = "From: $email\r\n";
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Handle non-POST requests (e.g., direct access to the script)
    echo "Invalid request.";
}
?>
