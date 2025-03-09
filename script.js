// script.js
let display = document.getElementById('display');

// Function to append value to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to calculate the result
function calculate() {
  try {
    // Evaluate the expression in the display
    display.value = eval(display.value);
  } catch (error) {
    // Handle errors (e.g., invalid expressions)
    display.value = 'Error';
  }
}