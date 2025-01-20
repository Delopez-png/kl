function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').textContent = '0';
}

function append(value) {
    const display = document.getElementById('display');
    display.value += value;
    updateResult();
}

function updateResult() {
    const display = document.getElementById('display');
    const resultField = document.getElementById('result');
    try {
        const result = eval(display.value.replace('%', '/100'));
        resultField.textContent = result;
    } catch {
        resultField.textContent = '';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value.replace('%', '/100'));
        display.value = result;
        document.getElementById('result').textContent = result;
    } catch (error) {
        display.value = 'Error';
        document.getElementById('result').textContent = 'Error';
    }
}

