console.log(42);
console.log(-8 / 3);
console.log(2e3);     // 171
console.log(0xAB);    // 2000
console.log(NaN);    //NaN
console.log(123 / 0);  //Infinity


var fortyTwo = 42;
var delta = 8 / 3;

console.log(fortyTwo.toString());
console.log(+delta.toFixed(1));  //+переводит в число
console.log(delta.toFixed(1) + 4); // становится строкой + число
console.log(+delta.toFixed(1) + 4); //+ переводит в число

console.log(parseFloat(delta.toFixed(2))); // функция parse float переводит в число, работает с десятичными 2.67
console.log(parseInt(delta.toFixed(2))); //parseInt с целыми числами 2

//проверка на валидность числа
console.log(isNaN(NaN));
console.log(isNaN(45)); 

// проверка на бесконечность
console.log(isFinite(1 / 0));  // false 
console.log(isFinite(99999999)); // true