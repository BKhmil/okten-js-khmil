let separator = '--------------------------';
// 1. Створити пустий масив та :
console.log('~~~~~~ 1.a');
const arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0, j = 0; i < 50; ++i, j += 2) {
    arr[i] = j;
}
console.log(arr);
console.log(separator);
//     b. заповнити його 50 непарними числами за допомоги циклу.
console.log('~~~~~~ 1.b');
for (let i = 0, j = 1; i < 50; ++i, j += 2) {
    arr[i] = j;
}
console.log(arr);
console.log(separator);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arr.length = 20;
for (let i = 0; i < 20; ++i) {
    arr[i] = Math.floor(Math.random() * 51);
}
console.log('~~~~~~ 1.c');
console.log(arr);
console.log(separator);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; ++i) {
    arr[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log('~~~~~~ 1.c');
console.log(arr);
console.log(separator);



// 2. Вивести за допомогою console.log кожен третій елемен
console.log('~~~~~~ 2');
for (let i = 2; i < arr.length; i += 3) {
    console.log(i + ' -> ' + arr[i]);
}
console.log(separator);



// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('~~~~~~ 3');
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) console.log(i + ' -> ' + arr[i]);
}
console.log(separator);



// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('~~~~~~ 4');
const evenThirdArr = [];
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(i + ' -> ' + arr[i]);
        evenThirdArr[evenThirdArr.length] = arr[i];
        // evenThirdArr.push(arr[i]);
    }
}
console.log(evenThirdArr);
console.log(separator);



// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('~~~~~~ 5');
const exampleArr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < exampleArr.length - 1; ++i) {
    if (exampleArr[i + 1] % 2 === 0) console.log(i + ' -> ' + exampleArr[i]);
}
console.log(separator);



// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('~~~~~~ 6');
const nums = [100,250,50,168,120,345,188];
let sum = 0;
for (const num of nums) {
    sum += num;
}
console.log(Math.floor(sum / nums.length));
console.log(separator);



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('~~~~~~ 7');
const randArr = [];
const randArrMultBy5 = [];
for (let i = 0; i < 10; ++i) {
    randArr[i] = Math.floor(Math.random() * 21);
    randArrMultBy5[i] = randArr[i] * 5;
}
console.log(randArrMultBy5);
console.log(separator);



// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log('~~~~~~ 8');
const randTypes = [1, 2, 'qwe', 'asd', false, true, 59, 985, []];
const onlyNumbers = [];
for (const element of randTypes) {
    // debugger; написав length замість onlyNumbers.length -_-
    if (typeof element === 'number') onlyNumbers[onlyNumbers.length] = element;
}
console.log(onlyNumbers);
console.log(separator);



console.log('~~~~~~~~~~ NEW PART ~~~~~~~~~~');
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
console.log('##### new part 1 #####');
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; ++i) {
    for (let j = 0; j < citiesWithId.length; ++j) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            let obj = {};
            for (let key in usersWithId[i]) {
                obj[key] = usersWithId[i][key];
            }
            obj.address = {};
            for (let key in citiesWithId[j]) {
                obj.address[key] = citiesWithId[j][key];
            }
            // console.log(obj);
            usersWithCities[usersWithCities.length] = obj;
        }
    }
}
console.log(usersWithCities);
console.log(separator);



//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//              вже робив таке декілька разів у попередніх завданнях



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log('##### new part 2 #####');
const tenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cloneArr = [];
for (let i = 0; i < tenNums.length; ++i) {
    cloneArr[i] = tenNums[i];
}
console.log(tenNums);
console.log(cloneArr);
console.log(separator);



const letters = [ 'a', 'b', 'c'];
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log('##### new part 3 with FOR #####');
let str1 = '';
for (let i = 0; i < letters.length; ++i) {
    str1 += letters[i];
}
console.log(str1);
console.log(separator);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('##### new part 3 with WHILE #####');
let str2 = '';
let x = 0;
while (x < letters.length) {
    str2 += letters[x];
    ++x;
}
console.log(str2);
console.log(separator);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log('##### new part 3 with FOR OF #####');
let str3 = '';
for (const letter of letters) {
    str3 += letter;
}
console.log(str3);
console.log(separator);