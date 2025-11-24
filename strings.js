// strings.js
// Name: Keith Vazquez
// Purpose: Validate credentials
// Credntials are (Keith Vazquez 93638)

// Get the form element
const userForm = document.getElementById("userForm");

// Get input elements
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const zipCodeInput = document.getElementById("zipCode");

// Get error display elements
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const zipError = document.getElementById("zipError");

// Get secret message display element
const secretArea = document.getElementById("secretArea");

// Handle form submit
userForm.onsubmit = function (event) {
  // Stop the form from reloading the page
  event.preventDefault();

  // Clear old errors and secret message
  firstNameError.innerHTML = "";
  lastNameError.innerHTML = "";
  zipError.innerHTML = "";
  secretArea.innerHTML = "";

  // Read values and trim spaces
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const zipCode = zipCodeInput.value.trim();

  // Combine first name, a space, and last name
  const fullName = firstName + " " + lastName;

  // Assume everything is good to start
  let allGood = true;

  // Check first name not empty
  if (firstName.length === 0) {
    firstNameError.innerHTML = "Please enter your first name.";
    allGood = false;
  }

  // Check last name not empty
  if (lastName.length === 0) {
    lastNameError.innerHTML = "Please enter your last name.";
    allGood = false;
  }

  // Check full name length <= 20 characters
  if (fullName.trim().length > 20) {
    lastNameError.innerHTML = "Full name must be 20 characters or less.";
    allGood = false;
  }

  // Zip must be exactly 5 digits
  const zipPattern = /^[0-9]{5}$/;
  if (!zipPattern.test(zipCode)) {
    zipError.innerHTML = "Zip code must be exactly 5 digits.";
    allGood = false;
  }

  // If any validation failed, stop here
  if (!allGood) {
    return;
  }

  // Check specific credentials:
  // First: Keith, Last: Vazquez, Zip: 93638
  const isCorrectUser =
    firstName.toLowerCase() === "keith" &&
    lastName.toLowerCase() === "vazquez" &&
    zipCode === "93638";

  // If credentials are wrong, do not show secret
  if (!isCorrectUser) {
    secretArea.innerHTML = "Invalid credentials.";
    return;
  }

  // If we get here, everything is valid and credentials match
  // Show the secret message
  secretArea.innerHTML = "the cat is out of the bag";
};
