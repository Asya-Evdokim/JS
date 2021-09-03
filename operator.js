////////////////////////////////////////////////
/* 
Операнд - то к чему применяется оператор. 5 * 2 два операнда (5 и 2)
Унарный - который применяется к одному операнду - 1
Бинарный - который применяется к двум (5 - 2)

бинарный оператор '+' при применение к сторокам объединяет их в одну.
Другие арифмитические операторы работают только с числами и всегда преобразуют операнд в число (6 - '2') //4
*/
//1 Базовые операторы (математические)

var num1 = 12
var num2 = 8

console.log('+;', num1 + num2);
console.log('-;', num1 - num2);
console.log('*;', num1 * num2);
console.log('/;', num1 / num2);

var str1 = 'Hello';
var str2 = 'World';

console.log('+;', str1 + ' ' + str2);
console.log(1 + '2');
console.log(str1 + num1);

console.log(true + 1)


                //////////////////////////////////////////////
                // приоритет операций

                var result = 12 - 6 / 3;
                var result2 = 3 + 4 * 2;
                var isGreater = 20 - 6 * 3 >= 4;  //false
                var isGreater2 = 20 - 6 * 3 >= 1;  //true
                //             3    13  14  11

                console.log(result);
                console.log(result2);
                console.log(isGreater);  //false


                ////////////////////////////////
                //остаток от деления
                console.log('5 % 2', 5 % 2);

                var i = 1;
                //i = i +1;
                i++ //инкремент увевеличивает значение переменной на 1

                i-- //декремент

                console.log(i)
                //i = i + 3; короткая запись
                i += 3
                console.log(i);

                /////////////////
                // возведение в степерь **



//2 Операторы сравнения
console.log('5 > 3', 5 > 3);
console.log('3 < 2', 3 < 2);

console.log('8 >= 7', 8 >= 7);

console.log('4 == 5', 4 == 5); //проверка на равенство

console.log('4 != 5', 4 != 5) //проверка на неравенство

console.log('4 === 4', 4 === '4'); //false  === сравнение типа данных и значения
console.log('4 == 4', 4 == '4'); // true


/////////////////////////////////////////
// 3 Логические операторы
/*
    &&    | true | false
    true  | true | false
    false | false| false

    ||    | true | false
    true  | true | true
    false | true | false

    && (и)    - true если все значения true       -- находит первое ложное значение
    || (или)  - true усли хоть одно значение true -- находит первое истинное значение
    !  (нет)  - инвертирует true или false        -- приоритет ! выше всех остальных

 */

/////////////////////////////////////

// Условный оператор if else
var currentYear = 2018;
var carName = 'Ford';
var carYear = 2014;

var carAge = currentYear - carYear

//если возрвст машины меньше 5 лет юююю
// если больше то ,,,,
// иначе другое

if (carAge < 5) {
    console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' больше или равен 5')
} else {
    console.log('Возраст ' + carName + 'равняется ' + carAge + ' годам');
}

// 0  null  undefined  ''  NaN  - false
// string  number - true

// Тернарный оператор

 if (4) {
     console.log('Значение true')
 } else {
     console.log('Значение false')
 }

4 ? console.log('Значение true') : console.log('Значение false'); //тернарный оператор


// оператор switch

var carColor = 'green';

if (carColor === 'green') {
    console.log('Цвет машины зеленый')
} else if (carColor === 'red') {
    console.log('Цвет машины красный')
} else if (carColor === 'yellow') {
    console.log('Цвет машины желтый ')
} else {
    console.log('Цвет машины не определен')
}

switch (carColor) {
    case "green":
        console.log('Цвет машины зеленый');
        break
    case 'red':
        console.log('Цвет машины красный');
        break
    case 'yellow':
        console.log('Цвет машины желтый ');
        break
    default:
        console.log('Цвет машины не определен')
}