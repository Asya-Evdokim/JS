// методы взаимодействия с пользователем

document.querySelector('#alert').addEventListener('click', function () {
    alert('Вы успешно кликнули по кнопке') // предлагает нажать ок
});

document.querySelector('#confirm').addEventListener('click', function () {
    var decision = confirm('Вы уверены,что хотите совершить действие')   // предлагает выбрать ок или отмена

    console.log(decision);   // консоль выводит выбор пользователя

    if (decision) {
        alert('Вы успешно кликнули по кнопке')
    }
});

document.querySelector('#prompt').addEventListener('click', function() {
    var age = prompt('введите свой возраст')

    if (age >= 18) {
        alert('Вы можете пройти')
    } else { 
        alert('вы еще молоды')
    }
});


// методы в массиве

var str = '1,2,3,4,5,6,7';

var array = str.split(',');

console.log(array); // переделает в массив строчные значения


////console.log(array.join(';')); 

//console.log(array.reverse()); //обратный порядок массива


array.splice(1, 2, '11', '22') // удаляет и добавляет элементы в массив  

console.log(array);

var newArray = array.concat([1,2]) // клонирует 
console.log(newArray);

var objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 20}
]

var foundPerson = objArr.find(function (person) {
    return person.age === 20  // находит массив с нужным значением

});

console.log(foundPerson);
