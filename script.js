const styles = `*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: monospace;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::selection {
    background: transparent;
  }
}

body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-synthesis: none;
  scroll-behavior: smooth;
}


@media (prefers-color-scheme: dark) {
  body {
    filter:invert(1);
    background:black !important;
  }
}

:root {
  --bg-main: whitesmoke;
  --padding: 0.25rem 1rem;
  --border-radius: 5px;
}

body {
  display: flex;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, gainsboro, ghostwhite, whitesmoke, lightgray, oldlace)no-repeat center center;
}

#main {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.395);
  backdrop-filter: blur(50px);
  border: 1px solid black;
  box-shadow: 10px 10px 0px black;

  transition: all 150ms ease;
  transform: translate(-10px, -10px);

  &:hover {
    transform: translate(0px, 0px);
    box-shadow: 0px 0px 0px black;
    filter: none;

  }

  #output {
    background: black;
    min-height: 80px;
    color: greenyellow;
    font-size: 1.5rem;
    padding: 0.25rem;
    flex: 1;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;


  }

  #input {
    display: flex;
    gap: 1rem;
    flex-direction: column;


    #firstRow,
    #secondRow,
    #thirdRow,
    #fourthRow,
    #fifthRow {
      display: flex;
      gap: 1rem;

      button {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        background: lightgray;
        border: none;
        /* border-radius: 50%; */
        color: black;
        cursor: pointer;
        font-weight: 900 !important;

        box-shadow: 3px 3px 0px black;

        transition: all 150ms ease;
        transform: translate(-3px, -3px);
        border: 1px solid black;

        &:active {
          transform: translate(0px, 0px);
          box-shadow: 0px 0px 0px black;
        }
      }

    }

  }
}

#negative {
  font-size: 1rem !important;
}

#allClear {
  background: rgb(255, 0, 0) !important;
  color: white !important;
}

#backSpace {
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange !important;
}

@media (max-width:40em) {
  button {

    &:hover,
    &:active {
      transform: translate(0px, 0px) !important;
      box-shadow: 0px 0px 0px black !important;
    }
  }
}`
const elemObj = [{ "parentName": "head", "elementName": "link", "elementId": "icon", "elementContent": "" }, { "parentName": "head", "elementName": "link", "elementId": "font", "elementContent": "" }, { "parentName": "head", "elementName": "title", "elementId": "title", "elementContent": "odin-calculator" }, { "parentName": "head", "elementName": "meta", "elementId": "meta2", "elementContent": "" }, { "parentName": "head", "elementName": "meta", "elementId": "meta", "elementContent": "" }, { "parentName": "head", "elementName": "style", "elementId": "", "elementContent": styles }, { "parentName": "body", "elementName": "div", "elementId": "main", "elementContent": "" }, { "parentName": "div#main", "elementName": "div", "elementId": "output", "elementContent": "" }, { "parentName": "div#output", "elementName": "div", "elementId": "history", "elementContent": "history" }, { "parentName": "div#output", "elementName": "div", "elementId": "result", "elementContent": "result" }, { "parentName": "div#main", "elementName": "div", "elementId": "input", "elementContent": "" }, { "parentName": "div#input", "elementName": "div", "elementId": "firstRow", "elementContent": "" }, { "parentName": "div#firstRow", "elementName": "button", "elementId": "allClear", "elementContent": "AC" }, { "parentName": "div#firstRow", "elementName": "button", "elementId": "backSpace", "elementContent": "C" }, { "parentName": "div#firstRow", "elementName": "button", "elementId": "negative", "elementContent": "-/+" }, { "parentName": "div#firstRow", "elementName": "button", "elementId": "divide", "elementContent": "÷" }, { "parentName": "div#input", "elementName": "div", "elementId": "secondRow", "elementContent": "" }, { "parentName": "div#secondRow", "elementName": "button", "elementId": "k7", "elementContent": "7" }, { "parentName": "div#secondRow", "elementName": "button", "elementId": "k8", "elementContent": "8" }, { "parentName": "div#secondRow", "elementName": "button", "elementId": "k9", "elementContent": "9" }, { "parentName": "div#secondRow", "elementName": "button", "elementId": "multiply", "elementContent": "*" }, { "parentName": "div#input", "elementName": "div", "elementId": "thirdRow", "elementContent": "" }, { "parentName": "div#thirdRow", "elementName": "button", "elementId": "k4", "elementContent": "4" }, { "parentName": "div#thirdRow", "elementName": "button", "elementId": "k5", "elementContent": "5" }, { "parentName": "div#thirdRow", "elementName": "button", "elementId": "k6", "elementContent": "6" }, { "parentName": "div#thirdRow", "elementName": "button", "elementId": "subtract", "elementContent": "-" }, { "parentName": "div#input", "elementName": "div", "elementId": "fourthRow", "elementContent": "" }, { "parentName": "div#fourthRow", "elementName": "button", "elementId": "k1", "elementContent": "1" }, { "parentName": "div#fourthRow", "elementName": "button", "elementId": "k2", "elementContent": "2" }, { "parentName": "div#fourthRow", "elementName": "button", "elementId": "k3", "elementContent": "3" }, { "parentName": "div#fourthRow", "elementName": "button", "elementId": "add", "elementContent": "+" }, { "parentName": "div#input", "elementName": "div", "elementId": "fifthRow", "elementContent": "" }, { "parentName": "div#fifthRow", "elementName": "button", "elementId": "equals", "elementContent": "=" }, { "parentName": "div#fifthRow", "elementName": "button", "elementId": "k0", "elementContent": "0" }, { "parentName": "div#fifthRow", "elementName": "button", "elementId": "decimal", "elementContent": "." }, { "parentName": "div#fifthRow", "elementName": "button", "elementId": "percent", "elementContent": "%" }]

function addElement(Obj) {
  for (let i = 0; i < Obj.length; i++) {
    const newItem = document.createElement(Obj[i].elementName);
    const parentItem = document.querySelector(Obj[i].parentName);
    parentItem.appendChild(newItem);
    if (Obj[i].elementContent) newItem.innerHTML = Obj[i].elementContent;
    if (Obj[i].elementId.length) newItem.setAttribute("id", Obj[i].elementId);
  }
}

addElement(elemObj);

let currentInput = "";
let previousInput = "";
let operator = "";

const output = document.querySelector("#result");
const history = document.querySelector("#history");

function updateDisplay() {
  output.innerText = currentInput || "0";
  history.innerText = previousInput ? `${previousInput} ${operator} ${currentInput}` : "";
}

function handleNumber(number) {
  if (currentInput.length < 15) {
    currentInput += number;
    updateDisplay();
  }
}

function handleOperator(op) {
  if (currentInput === "") return;

  if (previousInput !== "") {
    handleEquals();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
}

function handleEquals() {
  if (previousInput === "" || currentInput === "") return;

  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "÷":
      result = prev / curr;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

function handleClear() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}

function handleBackspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

document.querySelector("#allClear").addEventListener("click", handleClear);
document.querySelector("#backSpace").addEventListener("click", handleBackspace);
document.querySelector("#negative").addEventListener("click", () => {
  currentInput = currentInput.startsWith("-") ? currentInput.slice(1) : `-${currentInput}`;
  updateDisplay();
});
document.querySelector("#equals").addEventListener("click", handleEquals);

const numberButtons = document.querySelectorAll("#input button:not(#allClear):not(#backSpace):not(#negative):not(#equals):not(#percent):not(#decimal)");
numberButtons.forEach(button => {
  button.addEventListener("click", () => handleNumber(button.innerText));
});

const operatorButtons = document.querySelectorAll("#input button:not(#k0):not(#k1):not(#k2):not(#k3):not(#k4):not(#k5):not(#k6):not(#k7):not(#k8):not(#k9)");
operatorButtons.forEach(button => {
  button.addEventListener("click", () => handleOperator(button.innerText));
});