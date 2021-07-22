// атрибуты 

var a = document.querySelector('a');
var old = a.getAttribute('href');

console.log(a.attributes)

//заменить атрибуты


//ссылка

a.setAttribute('href', 'https://ya.ru/'); //замена ссылки
a.setAttribute('title', 'Yandex'); // замена подписи

a.textContent = 'Yandex'; //замена текста 


