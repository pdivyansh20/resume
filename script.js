const buttonValue = document.querySelectorAll("button");
const screenValue = document.querySelector("#Input");
const dispValue = document.querySelector("#Result");

let isNumber;

// screenValue.value = '0';
// dispValue.value = '0';

function refreshCalculator() {
  isNumber = true;
  screenValue.value = "";
  dispValue.value = "";
}

function mod(x) {
  if (isNaN(x) || x == "" || x == "undefined") return "Invalid!";
  else return Math.abs(x);
}

refreshCalculator();
buttonValue.forEach((element) => {
  element.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === "C") {
      refreshCalculator();
    } else if (buttonText === "." && !screenValue.value.includes(".")) {
      if (screenValue.value == "") {
        screenValue.value += "0.";
      } else {
        screenValue.value += buttonText;
      }
    } else if (buttonText === "←") {
      screenValue.value = screenValue.value.slice(0, -1);
    } else if (buttonText === "+/-" && screenValue.value != "") {
      screenValue.value = -1 * eval(screenValue.value);
    } else if (buttonText >= "0" && buttonText <= 9 && isNumber) {
      if (screenValue.value === "0") {
        screenValue.value = buttonText;
      } else {
        screenValue.value += buttonText;
      }
    } else if (buttonText === "|x|") {
      const output = mod(screenValue.value);
      dispValue.value = output;
      isNumber = false;
    }
  });
});
