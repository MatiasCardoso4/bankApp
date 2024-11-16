const form = document.querySelector("form");
const input = document.querySelector(".user-name");
const loginBtn = document.querySelector("login-btn");
const container = document.querySelector(".container");
const main = document.querySelector(".main-section");

let user = "";
const savedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];
let userInfo = [];

input.addEventListener("input", (e) => {
  user = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
  createUser(userInfo);
  showTable();

  console.log(userInfo);
});

function createUser(user) {
  const ifExists = savedUser.some((user) => user.id === user.id);
  if (!ifExists) {
    savedUser.push({ userName: user, accountNumber: 1, balance: 0 });
  }

  localStorage.setItem("user", JSON.stringify(userInfo));
}

function checkInput() {
  if (input.validity.valueMissing) {
    input.setCustomValidity("Ingrese su nombre de usuario");
    input.reportValidity();
  } else {
    input.setCustomValidity("");
    redirect();
  }
}

//*************************************\\
const template = document.querySelector("template");
const clone = document.importNode(template.content, true);
const userName = clone.getElementById("account-name");
const accountNumber = clone.getElementById("account-number");
const userBalance = clone.getElementById("account-balance");
const formTemplate = clone.querySelector(".template-form");
const inputAmount = clone.getElementById("amount");
const logoutBtn = clone.querySelector(".logout-btn");
const a = clone.querySelector("a");
//*************************************\\

function redirect() {
  formTemplate.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  container.textContent = "";
  container.appendChild(clone);
}

function showTable() {
  savedUser.forEach((user) => {
    userName.textContent = user.userName;
    accountNumber.textContent = user.accountNumber;
    userBalance.textContent = user.balance;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTemplate = localStorage.getItem("templateContent");

  if (savedTemplate) {
    redirect();
    showTable();
  } else {
    container.append(main);
  }
  localStorage.setItem("templateContent", clone);
});

logoutBtn.addEventListener("click", () => {
  a.href = "./index.html";
  localStorage.removeItem("templateContent");
});
