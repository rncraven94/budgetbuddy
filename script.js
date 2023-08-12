use: "strict";

const form = document.getElementById("myForm");
const outputElement = document.getElementById("output");
const totalElement = document.getElementById("total");
let totalArr = [];
let total = 0;

//updating the total
function updateTotal() {
  total = totalArr.reduce((sum, value) => sum + parseFloat(value), 0);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

//updating the dom
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const transactionValue = document.getElementById("transaction").value;
  //creating anew element to hold the transaction data
  const transactionItem = document.createElement("div");

  //checking if above 0
  if (transactionValue < 0) {
    transactionItem.textContent = `Transaction Amount: $${transactionValue}`;
    transactionItem.classList.add("red-text");
  } else {
    transactionItem.textContent = `Transaction Amount: $${transactionValue}`;
  }

  totalArr.push(transactionValue);
  // append the new transaction item to the output container
  outputElement.appendChild(transactionItem);
  //clear the input field after submission
  document.getElementById("transaction").value = "";

  updateTotal();
});
