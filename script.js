const form = document.querySelector("form");
const input = document.querySelector(".user-name");
const loginBtn = document.querySelector("login-btn");
const container = document.querySelector(".container");

let user = "";
// let amount = 0;
let userInfo = [];

input.addEventListener("input", (e) => {
  user = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
  handleUser();
  updateTable();
  console.log(userInfo);
});

function handleUser() {
  userInfo.push({ userName: user, accountNumber: 1, balance: 0 });
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
}

function updateTable() {
  userInfo.forEach((user) => {
    userName.textContent = user.userName;
    accountNumber.textContent = user.accountNumber;
    userBalance.textContent = user.balance;
  });
}

// function updateUserName() {
//   const ifExists = userInfo.some((u) => u.acountNumber === user.acountNumber);
//   if (!ifExists) {
//     userInfo = userInfo.forEach((user) => {
//       user.userName = user;
//     });
//   }

//   updateTable();
// }
