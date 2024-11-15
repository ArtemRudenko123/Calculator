document.addEventListener('DOMContentLoaded', function () { var display = document.getElementById('display'); var clearButton = document.getElementById('clear'); var calculateButton = document.getElementById('calculate'); var numberButtons = document.querySelectorAll('.number'); var operatorButtons = document.querySelectorAll('.operator'); clearButton.addEventListener('click', clearDisplay); calculateButton.addEventListener('click', calculate); numberButtons.forEach(function (button) { button.addEventListener('click', function () { appendToDisplay(button.innerText); }); }); operatorButtons.forEach(function (button) { button.addEventListener('click', function () { appendToDisplay(button.innerText); }); }); function appendToDisplay(value) { display.value += value; } function clearDisplay() { display.value = ''; } function calculate() { var expression = display.value; var result; try { result = eval(expression); } catch (error) { result = 'Error'; } display.value = result; } });