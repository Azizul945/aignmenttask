
function calculate() {
    var firstValue = parseFloat(document.getElementById('firstValue').value);
    var operator = document.getElementById('autoSizingSelect').value;
    var secondValue = parseFloat(document.getElementById('secondValue').value);

    var result;
    if (operator === 'add') {
        result = firstValue + secondValue;
    } else if (operator === 'subtract') {
        result = firstValue - secondValue;
    } else if (operator === 'multiply') {
        result = firstValue * secondValue;
    } else if (operator === 'divide') {
        if (secondValue !== 0) {
            result = firstValue / secondValue;
        } else {
            result = 'Cannot divide by zero';
        }
    } else {
        result = 'Invalid operator';
    }
    
    document.getElementById('result').value = "Result: " + result;

}
