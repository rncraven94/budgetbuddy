use: "strict";

const form = document.getElementById("myForm");
const outputElement = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const transactionValue = document.getElementById("transaction").value;
  outputElement.textContent = `Transaction Amount: $${transactionValue}`;
});
