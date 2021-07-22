//DOM


//var div = document.getElementById('playground');  //метод вызова id
//console.log(div);

//var p = document.getElementsByClassName('text'); // метод по классу 
//console.log(p);

//var h1 = document.getElementsByTagName('h1'); //метод вызова по тегу
//console.log(h1);


var div = document.querySelector('#playground');
var p = document.querySelectorAll('.text');
var h1 = document.querySelector('h1')

console.log(div);
console.log(p);
console.log(h1);

console.log(div.innerHTML); //содержимое элемента div

// заменить элемент кода
div.innerHTML = '<h2 style="color: red;">From javascript</h2>'; 
console.log(div.innerHTML);



console.log(h1.textContent) // посмотреть текст 
h1.textContent = 'from JS' // изменить текст


var input = document.querySelector('input');
console.log(input.value);