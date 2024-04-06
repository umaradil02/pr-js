
const calculator = document.querySelector('.container');

const display = document.getElementById('display');

calculator.addEventListener('click', function (event) {
    if (event.target.matches('input[type="button"]')) {
        const button = event.target;
        const value = button.value;

        if (value === 'C') {
            value.display = ' ';
        }
        else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
        else {
            display.value += value;
        }
    }
});
