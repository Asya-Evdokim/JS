// добавление события 
var button = document.querySelector('button');
var h1 = document.querySelector('h1');
var input = document.querySelector('input');


function buttonHandler() {
    console.log('Clicked') // показывает нажатие
    h1.textContent = input.value // изменяет текс н1 на текст в input
};

button.addEventListener('click', buttonHandler); // событие клик вызывает функцию, когда произойдет это событие 

// какие события бываеют смотреть в MDN

//отработка события наведение мыши на h1 и замена цвета при наведении

h1.addEventListener('mouseenter', function () {
    this.style.color = 'red'
    
});

h1.addEventListener('mouseleave', function () {
    this.style.color = 'black'
});


var divs = document.querySelectorAll('div');

//всплытие и погружение 
/*
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {
        console.log(this.getAttribute('id'));
    }, true) // меняем порядок по умолчанию
}
*/


for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function (event) {
        event.stopPropagation(); //метод  останавливает событие на том элементе, на котором произошел клик
        console.log(this.getAttribute('id'));
    })
}


// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//   p[i].addEventListener('click', function(event) {
//     event.target.style.color = 'blue'
//   })
// }

document.getElementById('wrapper').addEventListener('click', function(event) {
    var tagName = event.target.tagName.toLowerCase()
  
    if (tagName === 'p') {
      event.target.style.color = 'blue'
    }
  
    if (event.target.classList.contains('color')) {
      event.target.style.color = 'red'
    }
  })
  