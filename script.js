let total = 0;

function addNumber() {
  const numberInput = document.getElementById("numberInput");
  const number = parseInt(numberInput.value);

  if (!isNaN(number)) {
    total += number;
    document.getElementById("totalCount").textContent = `Total: ${total}`;
    numberInput.value = ""; // Clear input field after adding
  } else {
    alert("Please enter a valid number.");
  }
}
