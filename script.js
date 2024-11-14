const form = document.querySelector("form");
const input = document.querySelector(".user-name");
const loginBtn = document.querySelector("login-btn");
const container = document.querySelector(".container");

let user = "";
let amount = 0;
let userInfo = [{ userName: user, balance: 0, acountNumber: 1213526500 }];
console.log(userInfo[0].userName);

input.addEventListener("input", (e) => {
  user = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function handleUser() {}

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
const userName = clone.getElementById("user-name");
const accountNumber = clone.getElementById("user-number-account");
const amountTemplate = clone.getElementById("user-balance");
const formTemplate = clone.querySelector(".amount-user");
const inputAmount = clone.getElementById("amount");
//*************************************\\

function redirect() {
  formTemplate.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // inputAmount.addEventListener("input", (e) => {
  //   updateUserInfo(amount);
  // });

  container.textContent = "";
  container.append(clone);
  updateTable();
}

function updateTable() {
  userInfo.forEach((user) => {
    userName.textContent = user.userName;
    accountNumber.textContent = user.acountNumber;
    amountTemplate.textContent = user.balance;
  });
}

function updateUserName() {
  userInfo = userInfo.map((user) => {
    user.userName = user;
  });
  updateTable();
}
