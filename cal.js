let currentInput = '';
function appendToDisplay(value) {
    currentInput += value;
    updateDisplay(currentInput);
}
function calculate() {
    try {
        const result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
        currentInput = '';
    }
}
function clearDisplay() {
    currentInput = '';
    updateDisplay('');
}
function updateDisplay(value) {
    document.getElementById('display').value = value;
}