//функция
//Имя функции и её предназначение
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

var carName = 'Ford';
var carYear = 2010;
var personYear = 1990;

//вычисляется возраст
function calculateAge(year) {
    var currentYear = 2018;
    var result = currentYear - year;
    return result
}

//выводим значение с уменьшением количества кода
function checkAngLogAge(year) {
    if (calculateAge(year) < 10) {
        console.log('Возраст меньше 10 лет')
    } else {
        console.log('Возраст больше 10 лет')
    }
}

checkAngLogAge(carYear);
checkAngLogAge(personYear);