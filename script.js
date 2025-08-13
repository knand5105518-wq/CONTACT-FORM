document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMsg = document.getElementById("successMsg");

  let valid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  // If valid
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
