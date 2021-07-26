var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $result = document.querySelector('#result');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');
var $gameTime = document.querySelector('#game-time');

var colors = ['red', 'blue', 'green', 'yellow'];
var score = 0;
var isGameStarted = false

$start.addEventListener('click', startGame); // вызывается функция начала игры
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGetTime);


//начало игры
function startGame() {
    score = 0;
    setGetTime();
    $gameTime.setAttribute('disabled', 'true'); //блокировка input во время тгры

    
    isGameStarted = true;
    $game.style.backgroundColor = '#fff';
    hide($start) // оптимизация -  $start.classList.add('hide');

    // счетчик времени
    var interval = setInterval(function() {
        var time = parseFloat($time.textContent);

    if (time <= 0) {
        clearInterval(interval)
       endGame() //end game
    } else { 
        $time.textContent = (time - 0.1).toFixed(1)
    }
    }, 100)
   

    renderBox()
};

// показывает результат кликов на квадрат
function setGameScore() {
    $result.textContent = score.toString();
}

function setGetTime(){
    var time = +$gameTime.value;
    $time.textContent = time.toFixed(1);

    show($timeHeader);    // оптимизация - $timeHeader.classList.remove('hide');
    hide($resultHeader);    // оптимизация -  $resultHeader.classList.add('hide');
}

//конец игры
function endGame() {
    isGameStarted = false;

    setGameScore();

    show($start) // оптимизация -  $start.classList.remove('hide');  //возвращаем предыдущий класс
    $game.innerHTML = ''; // очистка от квадратов
    $game.style.backgroundColor = '#ccc';

    hide($timeHeader);    // оптимизация -  $timeHeader.classList.add('hide');
    show($resultHeader);    // оптимизация - $resultHeader.classList.remove('hide');

    $gameTime.removeAttribute('disabled');
}

function handleBoxClick(event) {
    if (!isGameStarted) {    //остановка игры
        return
    }
    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

// создается  div-квадрат со стилем 
function renderBox() {
    $game.innerHTML = ''  // очистить HTML

    var box = document.createElement('div');
    var boxSize = getRandom(30, 100); // размер квадрата 
    var gameSize = $game.getBoundingClientRect(); // размеры исходного контейнера
    var maxTop = gameSize.height - boxSize;
    var maxleft = gameSize.width - boxSize;

    var randomColorIndex = getRandom(0, colors.length)



    box.style.height =  box.style.width = boxSize + 'px'; // добавляем рандомный размер
    box.style.position = 'absolute';
    box.style.backgroundColor = colors[randomColorIndex];
    box.style.top = getRandom(0, maxTop) + 'px'; // рандомный значения
    box.style.left = getRandom(0, maxleft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true')   // задаем атрибут, для того что бы определить ,что клик идет на квадрат 

    $game.insertAdjacentElement('afterbegin', box); // чтобы div создался за предыдущим

};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)   //расчитывается рандомное число и округляется
}


// оптимизация кода с выводом классов

//добавляет
function show($el) {
    $el.classList.remove('hide')
};

//убирает 
function hide($el) {
    $el.classList.add('hide')
};