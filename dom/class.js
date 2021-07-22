// классы 

var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');

//вызвать объект classList и выбрать метод 

//добавить класс
box1.classList.add('red');

//убираем класс
//box2.classList.remove('blue');

//проверить содержится ли какйото класс у элемента
var hasClass = box2.classList.contains('blue');
console.log(hasClass);

//если есть класс-удалить его, если нет- добавить
if (hasClass) {
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}