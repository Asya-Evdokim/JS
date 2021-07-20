var cars = [
    'Ford',
    'Mazda',
    'Kia'
];

console.log(cars);
console.log(cars[1]);


//методы
console.log(cars.length); // узнать количество в массиве


//добавит в конец новый элемент
cars.push('Audi'); 
console.log(cars)


//удаляет последний элемент 
var audi = cars.pop();
console.log(cars, audi); 

//удалять и возвращать первый элемент
var ford = cars.shift();
console.log(cars, ford);

//добавляет в начало
cars.unshift(audi);
console.log(cars);

console.log(cars.indexOf('kia'));

var index = cars.indexOf('Kia');
var kia = cars [index];

console.log(kia)

