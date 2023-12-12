// 1. Задание
let num1 = document.getElementById('input1')
let num2 = document.getElementById('input2')
let buttonEl1 = document.getElementById('button1')
let resultEl1 = document.getElementById('res1')

buttonEl1.onclick = function () {
    resultEl1.textContent = (+num1.value + +num2.value) / 2
}

// 2. Задание
let num11 = document.getElementById('input11')
let num22 = document.getElementById('input22')
let buttonEl2 = document.getElementById('button2')
let resultEl2 = document.getElementById('res2')
buttonEl2.onclick = function () {
    resultEl2.textContent = (+num11.value % +num22.value)
}
// 3. Задание
function convertTime() {
    let inputTime = document.getElementById('inputTime').value;
    let timeRegex = /^(1[0-2]|0?[1-9]):([0-5][0-9]) ([APMapm]{2})$/;
    if (timeRegex.test(inputTime)) {
        let [hours, minutes, period] = inputTime.split(/:| /)
        if (period.toUpperCase() === 'PM' && hours !== '12') {
            hours = String(Number(hours) + 12);
        } else if (period.toUpperCase() === 'AM' && hours === '12') {
            hours = '00';
        }
        document.getElementById('res3').innerText = "Преобразованное время: " + hours + ":" + minutes;
    } else {
        document.getElementById('res3').innerText = "Введите время в формате ЧЧ:ММ AM/PM.";
    }
}

// 4. Задание
const numbers = document.getElementById('numbers');
function twoNumber() {
    let numbersValue = numbers.value;
    let arrTwoNumber = numbersValue.split('-');
    if (Number(arrTwoNumber[0]) > Number(arrTwoNumber[1])) {
        res4.textContent = arrTwoNumber[0];
    } else {
        res4.textContent = arrTwoNumber[1];
    }
}

// 5. Задание
let a = document.getElementById('a');
let b = document.getElementById('b');

function result5() {
    let aValue = Number(a.value);
    let bValue = Number(b.value);
    let x = -bValue / aValue;
    if (x > 0 && x < 1) {
        res5.textContent = "-1; (x=" + x + ")";
    } else if (x >= 1) {
        res5.textContent = "1;  (x=" + x + ")";
    } else {
        res5.textContent = "x=" + x;
    }
}

// 6. Задание
const aRub = document.getElementById('cena');
const bRub = document.getElementById('oplata');
function change() {
    let aRubValue = aRub.value;
    let bRubValue = bRub.value;
    let arrARubValue = aRubValue.split('.');
    let arrBRubValue = bRubValue.split('.');
    let summRub = Number(arrBRubValue[0]) - Number(arrARubValue[0]);
    let summKop = Number(arrBRubValue[1]) - Number(arrARubValue[1]);
    if (summKop < 0) {
        summKop = 100 + summKop;
        summRub = summRub - 1;
    }
    let arrRub = [];
    arrRub[0] = summRub;
    arrRub[1] = summKop;
    if (isNaN(summRub) || isNaN(summKop)) {
        res6.textContent = 'Неверно введены данные';
    } else {
        if (summRub >= 0) {
            res6.textContent = `${summRub} рублей ${summKop} копеек`;
        } else {
            res.textContent = 'Не хватает денег';
        }
    }
}

// 7. Задание

let inputNumber3Max = document.getElementById('numbers3');
function Number3Max() {
    let Number3MaxValue = inputNumber3Max.value;
    let arrThreeNumber = Number3MaxValue.split('-');
    if (Number(arrThreeNumber[0]) >= Number(arrThreeNumber[1])) {
        if (Number(arrThreeNumber[0]) >= Number(arrThreeNumber[2])) {
            res7.textContent = arrThreeNumber[0];
        } else {
            res7.textContent = arrThreeNumber[2];
        }
    } else {
        if (Number(arrThreeNumber[1]) >= Number(arrThreeNumber[2])) {
            res7.textContent = arrThreeNumber[1];
        } else {
            res7.textContent = arrThreeNumber[2];
        }
    }
}

//8. Задание
let inputNumber3Min = document.getElementById('numbersMin');
function NumberMin() {
    let Number3MinValue = inputNumber3Min.value;
    let minThreeNumber = Number3MinValue.split('-');
    if (Number(minThreeNumber[0]) <= Number(minThreeNumber[1])) {
        if (Number(minThreeNumber[0]) <= Number(minThreeNumber[2])) {
            res8.textContent = minThreeNumber[0];
        } else {
            res8.textContent = minThreeNumber[2];
        }
    } else {
        if (Number(minThreeNumber[1]) <= Number(minThreeNumber[2])) {
            res8.textContent = minThreeNumber[1];
        } else {
            res8.textContent = minThreeNumber[2];
        }
    }
}

// 9. Задание
function checkLeapYear() {
    var year = document.getElementById('yearInput').value;
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    var resultElement = document.getElementById('res9');
    if (isLeapYear) {
        resultElement.innerHTML = "Да " + year + ' год, високосный год!';
    } else {
        resultElement.innerHTML = "Нет " + year + ' год, не високосный год!';
    }
}

// 10. Задание
const inputIcecream = document.getElementById('inputIceCream');
function iceCream() {
    let inputIcecreamValue = Number(inputIcecream.value);
    let icecreamFive = inputIcecreamValue % 5;
    if (icecreamFive >= 3) {     // условие если остаток равен или больше 3   
        icecreamFive = icecreamFive % 3;
    }
    let icecreamThree = inputIcecreamValue % 3;
    if (icecreamFive === 0 || icecreamThree === 0) {
        res10.textContent = 'Можно';
    } else {
        res10.textContent = 'Нельзя';
    }

}

// 11. Задание
const inputKotletMesto = document.getElementById('inputKotletMesto');
const inputKotletTime = document.getElementById('inputKotletTime');
const inputKotletAll = document.getElementById('inputKotletAll');
function kotlet() {
    let inputKotletMestoValue = Number(inputKotletMesto.value);
    let inputKotletTimeValue = Number(inputKotletTime.value);
    let inputKotletAllValue = Number(inputKotletAll.value);
    if (isNaN(inputKotletMestoValue) || isNaN(inputKotletTimeValue) || isNaN(inputKotletAllValue)) {
        res9.textContent = 'Некорректный формат';
    } else {
        if (inputKotletMestoValue <= 32000 && inputKotletTimeValue <= 32000 && inputKotletAllValue <= 32000) {
            let porcii = Math.ceil(inputKotletAllValue / inputKotletMestoValue);
            let porciyaTime = 2 * inputKotletTimeValue;
            let allTime = porcii * porciyaTime;
            res11.textContent = `${allTime}`;
        } else {
            res11.textContent = `нельзя вводить больше 32000`;
        }
    }
}