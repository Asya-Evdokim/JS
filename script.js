//функция

var carName = 'Ford';
var carYear = 2010;
var personYear = 1990;

function calculateAge(year) {
    var currentYear = 2018;
    var result = currentYear - year;
    return result
}

function checkAngLogAge(year, name, comparisonTo) {
    if (calculateAge(year) < comparisonTo) {
        console.log('Возраст ' + name + ' меньше ' + comparisonTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' больше ' + comparisonTo + ' лет')
    }
}

checkAngLogAge(carYear, 'машины', 8);
checkAngLogAge(personYear, 'человека', 20);