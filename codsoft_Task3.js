let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.id === "clear") {
      expression = "";
      display.value = "";
    } 
    else if (button.id === "delete") {
      expression = expression.slice(0, -1);
      display.value = expression;
    }
    else if (button.id === "equals") {
      try {
        display.value = eval(expression);
        expression = display.value;
      } catch {
        display.value = "Error";
        expression = "";
      }
    }
    else {
      expression += button.textContent;
      display.value = expression;
    }
  });
});
