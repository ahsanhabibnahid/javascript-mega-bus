document
  .getElementById("first-plus-btn")
  .addEventListener("click", function () {
    plusButtonFunction("firstClassInput", true);
  });
document
  .getElementById("economy-plus-btn")
  .addEventListener("click", function () {
    plusButtonFunction("economyClassInput", true);
  });
document
  .getElementById("first-minus-btn")
  .addEventListener("click", function () {
    plusButtonFunction("firstClassInput", false);
  });
document
  .getElementById("economy-minus-btn")
  .addEventListener("click", function () {
    plusButtonFunction("economyClassInput", false);
  });

document.getElementById("bookNowBtn").addEventListener("click", function () {
  document.getElementById("details").style.display = "none";
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  const element = document.getElementById("booking-form");
  element.appendChild(para);
});

function plusButtonFunction(id, isTrue) {
  let input = document.getElementById(id);
  let inputNumber = parseInt(input.value);
  let newInputNumber = inputNumber;
  if (isTrue == true) {
    newInputNumber = inputNumber + 1;
  } else if (isTrue == false && inputNumber > 0) {
    newInputNumber = inputNumber - 1;
  }
  input.value = newInputNumber;
  calculation();
}

function calculation() {
  let firstNumber = getInputValue("firstClassInput");
  let economyNumber = getInputValue("economyClassInput");
  let subTotal = firstNumber * 150 + economyNumber * 100;
  let tax = subTotal * 0.1;
  let grandTotal = subTotal + tax;
  document.getElementById("subTotal").innerText = "$" + subTotal;
  document.getElementById("tax").innerText = "$" + tax;
  document.getElementById("grandTotal").innerText = "$" + grandTotal;
}

function getInputValue(id) {
  let inputValue = document.getElementById(id);
  let inputNumber = parseInt(inputValue.value);
  return inputNumber;
}
