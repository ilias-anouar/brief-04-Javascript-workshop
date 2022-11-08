

function plus() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    document.getElementById('results').innerHTML = ( + number1 + + number2)
}

function minus() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    document.getElementById('results').innerHTML = (number1 - number2)
}

function divide() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    document.getElementById('results').innerHTML = (number1 / number2)
}

function multiply() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    document.getElementById('results').innerHTML = (number1 * number2)
}
