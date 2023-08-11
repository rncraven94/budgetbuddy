use: "strict";

const form = document.getElementById("myForm");
const outputElement = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const transactionValue = document.getElementById("transaction").value;
  //creating anew element to hold the transaction data
  const transactionItem = document.createElement("div");
  transactionItem.textContent = `Transaction Amount: $${transactionValue}`;
  // append the new transaction item to the output container
  outputElement.appendChild(transactionItem);
  //clear the input field after submission
  document.getElementById("transaction").value = "";
});
