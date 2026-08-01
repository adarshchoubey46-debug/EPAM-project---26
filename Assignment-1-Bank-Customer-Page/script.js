// Customer record (simple, single account — no login)
const customer = {
  name: "Adarsh",
  balance: 5000
};

// Get references to HTML elements
const greeting = document.getElementById("greeting");
const balanceDisplay = document.getElementById("balance");
const todayDisplay = document.getElementById("today");
const messageDisplay = document.getElementById("message");
const amountInput = document.getElementById("amount");
const historyEl = document.getElementById("history");
const emptyNote = document.getElementById("emptyNote");

// INITIAL SETUP 
function init() {
  greeting.textContent = "Good day, " + customer.name;
  todayDisplay.textContent = "As of " + new Date().toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
  updateBalance();
}

// UPDATE BALANCE ON SCREEN 
function updateBalance() {
  balanceDisplay.textContent = "₹" + customer.balance.toLocaleString("en-IN");
}

// SHOW SUCCESS/ERROR MESSAGE 
function showMessage(text, type) {
  messageDisplay.textContent = text;
  messageDisplay.className = "message " + type;
}

// ADD ROW TO TRANSACTION LEDGER
function addToHistory(type, amount) {
  emptyNote.style.display = "none"; // hide the "no entries yet" note

  const sign = type === "Deposit" ? "+" : "−";
  const cls = type === "Deposit" ? "pos" : "neg";
  const time = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const row = document.createElement("div");
  row.className = "ledger-row";
  row.innerHTML =
    '<div class="row-left">' +
      '<span class="row-type">' + type + '</span>' +
      '<span class="row-date">' + time + '</span>' +
    '</div>' +
    '<div class="row-amounts">' +
      '<div class="row-amount ' + cls + '">' + sign + '₹' + amount.toLocaleString("en-IN") + '</div>' +
      '<div class="row-balance">Balance: ₹' + customer.balance.toLocaleString("en-IN") + '</div>' +
    '</div>';

  historyEl.prepend(row); // newest entry on top
}

// DEPOSIT 
function deposit() {
  const amount = Number(amountInput.value);

  if (amount <= 0 || isNaN(amount)) {
    showMessage("Please enter a valid amount.", "error");
    return;
  }

  customer.balance = customer.balance + amount;
  updateBalance();
  addToHistory("Deposit", amount);
  showMessage("₹" + amount + " deposited successfully.", "success");
  amountInput.value = "";
}

// WITHDRAW 
function withdraw() {
  const amount = Number(amountInput.value);

  if (amount <= 0 || isNaN(amount)) {
    showMessage("Please enter a valid amount.", "error");
    return;
  }

  if (amount > customer.balance) {
    showMessage("Insufficient balance.", "error");
    return;
  }

  customer.balance = customer.balance - amount;
  updateBalance();
  addToHistory("Withdraw", amount);
  showMessage("₹" + amount + " withdrawn successfully.", "success");
  amountInput.value = "";
}

init();