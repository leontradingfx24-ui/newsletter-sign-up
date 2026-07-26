const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");

const formContent = document.getElementById("card");
const successMessage = document.getElementById("successMessage");
const userEmail = document.getElementById("userEmail");
const dismissButton = document.getElementById("dismissBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if email is empty or invalid
  if (emailInput.value.trim() === "" || !emailInput.validity.valid) {
    emailInput.classList.add("invalid");
    errorMessage.classList.add("show");

    return;
  }

  emailInput.classList.remove("invalid");
  errorMessage.classList.remove("show");

  // Put the entered email into the success message
  userEmail.textContent = emailInput.value;

  // Hide the form
  form.style.display = "none";

  formContent.style.display = "none";
  // Show success message
  successMessage.classList.add("show");
});

// Dismiss the success message
dismissButton.addEventListener("click", () => {

  // Hide success message
  successMessage.classList.remove("show");

  // Show form again
  formContent.style.display = "flex";

  // Clear input
  emailInput.value = "";

});