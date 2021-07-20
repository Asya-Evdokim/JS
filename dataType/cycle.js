var numbers = [1, 2, 3, 4, 5];

numbers.push('Not a number');
numbers.push('New');

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
};


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
};



//выбираем четные
for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        continue
    }
    console.log(numbers[i])
};



//выбираем нечетные
for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue
    }
    console.log(numbers[i])
};


for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        break
    }
    console.log(numbers[i])
};

numbers.push('String')

for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] === 'String') {
        break
    }
    console.log(numbers[i])
};
