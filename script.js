use: "strict";

const form = document.getElementById("myForm");
const outputElement = document.getElementById("output");
const totalElement = document.getElementById("total");
const depositElement = document.getElementById("deposit");
let total = 0;
let deposit = 0;
let travel = 0;
let grocery = 0;
let resturaunt = 0;
let entertainment = 0;
let housing = 0;
let bills = 0;
let savings = 0;
let investments = 0;
let other = 0;
let totalArr = [];
let depositArr = [];
let travelArr = [];
let groceryArr = [];
let resturauntArr = [];
let entertainmentArr = [];
let housingArr = [];
let billsArr = [];
let savingsArr = [];
let investmentsArr = [];
let otherArr = [];

//updating the total
function updateTotal() {
  total = totalArr.reduce((sum, value) => sum + parseFloat(value), 0);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  deposit = depositArr.reduce((sum, value) => sum + parseFloat(value), 0);
  depositElement.textContent = `Deposit: $${deposit.toFixed(2)}`;
}

//updating the dom
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const transactionValue = document.getElementById("transaction").value;
  const transactionType = document.getElementById("transactionType").value;
  const category = document.getElementById("category").value;
  //creating anew element to hold the transaction data
  const transactionItem = document.createElement("div");

  //checking if above 0
  if (transactionValue < 0) {
    transactionItem.textContent = `Category: ${category}, Transaction Type: ${transactionType}, Transaction Amount: $${transactionValue}`;
    transactionItem.classList.add("red-text");
  } else {
    transactionItem.textContent = `Category: ${category}, Transaction Type: ${transactionType}, Transaction Amount: $${transactionValue}`;
  }

  //delete a row
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function () {
    const index = Array.from(outputElement.children).indexOf(transactionItem);
    totalArr.splice(index, 1);
    if (category === "Deposit") {
      depositArr.splice(index, 1);
      updateTotal();
    }
    updateTotal();
    outputElement.removeChild(transactionItem);
  });

  transactionItem.appendChild(deleteButton);
  totalArr.push(transactionValue);
  //push the transaction value to the appropriate category
  if (category === "Deposit") {
    depositArr.push(transactionValue);
  }

  // append the new transaction item to the output container
  outputElement.appendChild(transactionItem);
  //clear the input field after submission
  document.getElementById("transaction").value = "";
  document.getElementById("transactionType").value = "";
  document.getElementById("category").value = "";

  updateTotal();
  if (total < 0) {
    totalElement.classList.add("red-text");
  }
});
