/* Типы данных
1 Number*    - число      [infinity (58/0)- математическая бесконечность, значение  infinity, a тип данных - number]
                         NaN = 'Frilance'/ 10 - вычислительная ошибка,результат неправильной или неопределенной матоперации. NaN всегда возвращает NaN. если есть в выражении NaN, то результат NaN.
2 String*    - строка (заключается в кавычки '', "", `обратные ковычки вставляют переменную ${str}`)
3 Boolean*   - логический тип true/false
4 BigInt -  очень большое числоб в конце чилового литерала добавляется n (353545465653535353n)

5 Null*      - пустое место ничего
6 Undefined* - неопределенный тип, значение не присвоено


7 Object*    -  сложная структура {a: 1}
8 Symbol     - уникальный идентификатор в объектах
9 Function


функция string меняет тип данных
userAge = String (userAge);

оператор определения данных
typeof   возвращает строку с именем типа
Синтаксис оператора: typeof x
Синтаксис функции: typeof(x)

typeof null // 'object' -ошибка языка,на самом деле это не объект

*/

var number = 42
var string = 'Message'
var isTrue = true // false
var obj = {a: 1}
var nothing = null
var undef = undefined

console.log(typeof nothing)

