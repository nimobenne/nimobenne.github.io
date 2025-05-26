// /nimo-portfolio/js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  const markValid = (input, isValid) => {
    input.classList.remove("invalid", "valid");
    input.classList.add(isValid ? "valid" : "invalid");
  };

  nameInput.addEventListener("input", () => {
    const isValid = nameInput.value.trim() !== "";
    nameError.textContent = isValid ? "" : "Name is required.";
    markValid(nameInput, isValid);
  });

  emailInput.addEventListener("input", () => {
    const isValid = validateEmail(emailInput.value);
    emailError.textContent = isValid ? "" : "Enter a valid email.";
    markValid(emailInput, isValid);
  });

  messageInput.addEventListener("input", () => {
    const isValid = messageInput.value.trim().length >= 10;
    messageError.textContent = isValid ? "" : "Message must be at least 10 characters.";
    markValid(messageInput, isValid);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    nameInput.dispatchEvent(new Event("input"));
    emailInput.dispatchEvent(new Event("input"));
    messageInput.dispatchEvent(new Event("input"));

    if (
      nameInput.classList.contains("valid") &&
      emailInput.classList.contains("valid") &&
      messageInput.classList.contains("valid")
    ) {
      alert("Form is valid! (In real deployment, this would send the email.)");
    }
  });
});
