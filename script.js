use: "strict";
// element forms for each category
const form = document.getElementById("myForm");
const outputElement = document.getElementById("output");
const totalElement = document.getElementById("total");
const depositElement = document.getElementById("deposit");
const travelElement = document.getElementById("travel");
const groceryElement = document.getElementById("groceries");
const resturauntElement = document.getElementById("restaurants");
const entertainmentElement = document.getElementById("entertainment");
const housingElement = document.getElementById("housing");
const billsElement = document.getElementById("bills");
const savingsElement = document.getElementById("savings");
const investmentsElement = document.getElementById("investments");
const otherElement = document.getElementById("other");
const travelElementPercentage = document.getElementById("travel-perc");
const groceryElementPercentage = document.getElementById("groceries-perc");
const resturauntElementPercentage = document.getElementById("restaurants-perc");
const entertainmentElementPercentage =
  document.getElementById("entertainment-perc");
const housingElementPercentage = document.getElementById("housing-perc");
const billsElementPercentage = document.getElementById("bills-perc");
const savingsElementPercentage = document.getElementById("savings-perc");
const investmentsElementPercentage =
  document.getElementById("investments-perc");
const otherElementPercentage = document.getElementById("others-perc");

//totals for each category
let total = 0;
let totalExpensesArr = [];
let totalExpenses = 0;
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
let travelPerc = 0;
let groceryPerc = 0;
let resturauntPerc = 0;
let entertainmentPerc = 0;
let housingPerc = 0;
let billsPerc = 0;
let savingsPerc = 0;
let investmentsPerc = 0;
let otherPerc = 0;

//updating the total
function updateTotal() {
  total = totalArr.reduce((sum, value) => sum + parseFloat(value), 0);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  deposit = depositArr.reduce((sum, value) => sum + parseFloat(value), 0);
  depositElement.textContent = `Deposit: $${deposit.toFixed(2)}`;
  travel = travelArr.reduce((sum, value) => sum + parseFloat(value), 0);
  travelElement.textContent = `Travel: $${Math.abs(travel.toFixed(2))}`;
  grocery = groceryArr.reduce((sum, value) => sum + parseFloat(value), 0);
  groceryElement.textContent = `Groceries: $${Math.abs(grocery.toFixed(2))}`;
  resturaunt = resturauntArr.reduce((sum, value) => sum + parseFloat(value), 0);
  resturauntElement.textContent = `Resturaunt: $${Math.abs(
    resturaunt.toFixed(2)
  )}`;
  entertainment = entertainmentArr.reduce(
    (sum, value) => sum + parseFloat(value),
    0
  );
  entertainmentElement.textContent = `Entertainment: $${Math.abs(
    entertainment.toFixed(2)
  )}`;
  housing = housingArr.reduce((sum, value) => sum + parseFloat(value), 0);
  housingElement.textContent = `Housing: $${Math.abs(housing.toFixed(2))}`;
  bills = billsArr.reduce((sum, value) => sum + parseFloat(value), 0);
  billsElement.textContent = `Bills: $${Math.abs(bills.toFixed(2))}`;
  savings = savingsArr.reduce((sum, value) => sum + parseFloat(value), 0);
  savingsElement.textContent = `Savings: $${Math.abs(savings.toFixed(2))}`;
  investments = investmentsArr.reduce(
    (sum, value) => sum + parseFloat(value),
    0
  );
  investmentsElement.textContent = `Investments: $${Math.abs(
    investments.toFixed(2)
  )}`;
  other = otherArr.reduce((sum, value) => sum + parseFloat(value), 0);
  otherElement.textContent = `Other: $${Math.abs(other.toFixed(2))}`;
  //updates expenses
  totalExpensesArr = [
    travel,
    grocery,
    resturaunt,
    entertainment,
    housing,
    bills,
    savings,
    investments,
    other,
  ];
  totalExpenses = totalExpensesArr.reduce(
    (sum, value) => sum + Math.abs(value),
    0
  );
  //red or black total

  if (total < 0) {
    totalElement.classList.add("red-text");
  } else {
    totalElement.classList.remove("red-text");
  }

  travelPerc = Math.trunc((Math.abs(travel) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(travelPerc)) {
    travelElementPercentage.textContent = `${travelPerc}%`;
  } else {
    travelElementPercentage.textContent = `0%`;
  }
  groceryPerc = Math.trunc((Math.abs(grocery) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(groceryPerc)) {
    groceryElementPercentage.textContent = `${groceryPerc}%`;
  } else {
    groceryElementPercentage.textContent = `0%`;
  }
  resturauntPerc = Math.trunc((Math.abs(resturaunt) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(resturauntPerc)) {
    resturauntElementPercentage.textContent = `${resturauntPerc}%`;
  } else {
    resturauntElementPercentage.textContent = `0%`;
  }
  entertainmentPerc = Math.trunc(
    (Math.abs(entertainment) / totalExpenses) * 100
  );
  // console.log(travelPerc);
  if (!isNaN(entertainmentPerc)) {
    entertainmentElementPercentage.textContent = `${entertainmentPerc}%`;
  } else {
    entertainmentElementPercentage.textContent = `0%`;
  }
  housingPerc = Math.trunc((Math.abs(housing) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(housingPerc)) {
    housingElementPercentage.textContent = `${housingPerc}%`;
  } else {
    housingElementPercentage.textContent = `0%`;
  }
  billsPerc = Math.trunc((Math.abs(bills) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(billsPerc)) {
    billsElementPercentage.textContent = `${billsPerc}%`;
  } else {
    billsElementPercentage.textContent = `0%`;
  }
  savingsPerc = Math.trunc((Math.abs(savings) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(savingsPerc)) {
    savingsElementPercentage.textContent = `${savingsPerc}%`;
  } else {
    savingsElementPercentage.textContent = `0%`;
  }
  investmentsPerc = Math.trunc((Math.abs(investments) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(investmentsPerc)) {
    investmentsElementPercentage.textContent = `${investmentsPerc}%`;
  } else {
    investmentsElementPercentage.textContent = `0%`;
  }
  otherPerc = Math.trunc((Math.abs(other) / totalExpenses) * 100);
  // console.log(travelPerc);
  if (!isNaN(otherPerc)) {
    otherElementPercentage.textContent = `${otherPerc}%`;
  } else {
    otherElementPercentage.textContent = `0%`;
  }
  updateExpenses();
}

//updating total expenses
function updateExpenses() {
  const expensesElement = document.getElementById("total-expenses");
  expensesElement.textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
}

//updating the dom
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const transactionValue = document.getElementById("transaction").value;
  const transactionType = document.getElementById("transactionType").value;
  const category = document.getElementById("category").value;
  //creating anew element to hold the transaction data
  const transactionItem = document.createElement("div");
  transactionItem.dataId = Date.now();

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
  deleteButton.classList.add("button-class");
  deleteButton.addEventListener("click", function () {
    const transactionId = transactionItem.dataId;
    const index = totalArr.findIndex((item) => item.dataId === transactionId);
    totalArr.splice(index, 1);
    if (category === "Deposit") {
      depositArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Travel") {
      travelArr.splice(index, 1);
      updateTotal();
      updateExpenses();
      console.log(travelArr);
      console.log(totalArr);
    }
    if (category === "Groceries") {
      groceryArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Restaurants") {
      resturauntArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Entertainment") {
      entertainmentArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Housing") {
      housingArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Bills") {
      billsArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Savings") {
      savingsArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Investments") {
      investmentsArr.splice(index, 1);
      updateTotal();
    }
    if (category === "Other") {
      otherArr.splice(index, 1);
      updateTotal();
    }
    totalExpensesArr.splice(index, 1);
    updateTotal();
    updateExpenses();
    outputElement.removeChild(transactionItem);
  });

  transactionItem.appendChild(deleteButton);
  totalArr.push(transactionValue);
  //push the transaction value to the appropriate category
  if (category === "Deposit") {
    depositArr.push(transactionValue);
  }
  if (category === "Travel") {
    travelArr.push(transactionValue);
  }
  if (category === "Groceries") {
    groceryArr.push(transactionValue);
  }
  if (category === "Restaurants") {
    resturauntArr.push(transactionValue);
  }
  if (category === "Entertainment") {
    entertainmentArr.push(transactionValue);
  }
  if (category === "Housing") {
    housingArr.push(transactionValue);
  }
  if (category === "Bills") {
    billsArr.push(transactionValue);
  }
  if (category === "Savings") {
    savingsArr.push(transactionValue);
  }
  if (category === "Investments") {
    investmentsArr.push(transactionValue);
  }
  if (category === "Other") {
    otherArr.push(transactionValue);
  }
  // append the new transaction item to the output container
  outputElement.appendChild(transactionItem);
  //clear the input field after submission
  document.getElementById("transaction").value = "";
  document.getElementById("transactionType").value = "";
  // document.getElementById("category").value = "";

  updateTotal();
});
