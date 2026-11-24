const form = document.querySelector("form");
const nameInput = document.querySelector('input[type="text"]');
const amountInput = document.querySelector('input[type="number"]');
const categorySelect = document.getElementById("categories");
const totalAmount = document.getElementById("total-amount");
const expenseList = document.getElementById("expense-list");

let total = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const amount = Number(amountInput.value);
  const category = categorySelect.value;

  const li = document.createElement("li");
  li.textContent = name + " - " + category + " - ₹" + amount;
  expenseList.appendChild(li);

  total = total + amount;
  totalAmount.textContent = "₹" + total;

  form.reset();
});