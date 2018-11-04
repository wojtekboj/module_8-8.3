'use strict';

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the button! And run converter!' + '<br><br>' + output.innerHTML;
var button = document.getElementById('greeter-button');

var temp;



// Funkcja, która przyjmuje temperaturę C i zwraca temperaturę F

function convert() {
    var fahr = Math.round((temp * 1.8) + 32);
    output.innerHTML = 'Temperature in Fahrenheit degree is ' + fahr + '<br><br>' + output.innerHTML + '<br><br>';
}

// Funkcja, która przyjmuje temperaturę C i zwraca informację  o stanie skupienia wody

var physical_state = function (state) {
    output.innerHTML = 'At this temperature, the water is ' + state + '!' + '<br>';
};

button.addEventListener('click', function () {
    temp = window.prompt('Please enter the temperature in degrees Celsius?');
    var fahr = Math.round((temp * 1.8) + 32);

    if (isNaN(fahr)) {
        output.innerHTML = +fahr + ' is not a number!';
    }
    if (fahr < 27) {
        physical_state('freezing');
        output.innerHTML += 'Better to run at this temperature, you re sure to be cold!';
    }
    if (fahr <= 28 && fahr >= 32) {
        physical_state('freezing');
        output.innerHTML += 'You must put on a hat and a scarf!';
    }
    if (fahr > 32 && fahr <= 55) {
        physical_state('liquid');
        output.innerHTML += 'You can wear a light jacket';
    }
    if (fahr > 55 && fahr <= 104) {
        physical_state('liquid');
        output.innerHTML += 'Is hot! Wear short pants!';
    }
    if (fahr > 104 && fahr < 211) {
        physical_state('liquid');
        output.innerHTML += 'Look out because you re going to get burned!';
    }
    if (fahr >= 212) {
        physical_state('steam');
        output.innerHTML += 'This temperature only for cooking eggs';
    }
    if (fahr > 213) {
        physical_state('steam');
        output.innerHTML = 'You better run away at this temperature';
    } else {
        convert();
    }
});


var output = document.getElementById('greeter-output2');
output.innerHTML = 'Click the button! And run converter!' + '<br><br>' + output.innerHTML;
var button = document.getElementById('greeter-button2');

var temp2;

// Funkcja, która przyjmuje temperaturę F i zwraca temperaturę C




function convert2() {
    var fahr2 = Math.round((temp2 - 32) / 1.8);
    output.innerHTML = 'Temperature in Celsius degree is ' + fahr2 + '<br><br>' + output.innerHTML + '<br><br>';
}




button.addEventListener('click', function () {

    temp2 = window.prompt('Please enter the temperature in degrees Fahrenheit?');
    var fahr2 = Math.round((temp2 - 32) / 1.8);

    if (isNaN(fahr2)) {
        output.innerHTML = +fahr2 + ' is not a number!';
    }
    if (fahr2 < -2) {
        physical_state('freezing');
        output.innerHTML += 'Better to run at this temperature, you re sure to be cold!';
    }
    if (fahr2 <= -1 && fahr2 >= 0) {
        physical_state('freezing');
        output.innerHTML += 'You must put on a hat and a scarf!';
    }
    if (fahr2 > 0 && fahr2 <= 13) {
        physical_state('liquid');
        output.innerHTML += 'You can wear a light jacket';
    }
    if (fahr2 > 13 && fahr2 <= 40) {
        physical_state('liquid');
        output.innerHTML += 'Is hot! Wear short pants!';
    }
    if (fahr2 > 40 && fahr2 < 100) {
        physical_state('liquid');
        output.innerHTML += 'Look out because you re going to get burned!';
    }
    if (fahr2 >= 100) {
        physical_state('steam');
        output.innerHTML += 'This temperature only for cooking eggs';
    }
    if (fahr2 > 101) {
        physical_state('steam');
        output.innerHTML = 'You better run away at this temperature';
    } else {
        convert2();
    }
});