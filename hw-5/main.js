let separator = '--------------------------';
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('TASK - 1');
const getRectSquare = (a, b) => a * b;
console.log(getRectSquare(4, 5));
console.log(separator);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
//                  напевно тут про круг, бо коло має тільки довжину
console.log('TASK - 2');
const getCircleSquare = r => Math.floor(Math.PI * Math.pow(r, 2));
console.log(getCircleSquare(6));
console.log(separator);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('TASK - 3');
const getCylinderSquare = (r, h) => {
    let sideSquare = 2 * Math.PI * r * h;
    return Math.floor(sideSquare + (2 * getCircleSquare(r)));
}
console.log(getCylinderSquare(5, 8));
console.log(separator);



// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('TASK - 4');
const printArr = array => {
    for (const element of array) {
        console.log(element);
    }
}
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArr(testArr);
console.log(separator);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('<h3>TASK - 5</h3>');
const createP = text => document.write(`<p>${text}</p>`);
createP('p created');
document.write(separator);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('<h3>TASK - 6</h3>');
const createUl = text => {
    document.write('<ul>');
    document.write(`
        <li>${text}</li>        
        <li>${text}</li>        
        <li>${text}</li>        
    `);
    document.write('</ul>');
}
createUl('li content');
document.write(separator);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('<h3>TASK - 7</h3>');
const createUlWithNItems = (liText, n) => {
    document.write('<ul>');
    for (let i = 0; i < n; ++i) {
        document.write(`<li>${liText}</li>`);
    }
    document.write('</ul>');
}
createUlWithNItems('n items li content', 5);
document.write(separator);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//       зрозумів це завдання наступним чином
document.write('<h3>TASK - 8</h3>');
const primitives = [1, 2, 3, 4, 5, 'asd', 'qwe', 'rty', 'fgh', 'zxc', true, false, true, false, true];
const utilFunc = (ulTitle, arr) => {
    document.write(`${ulTitle}<ul>`);
    for (const element of arr) {
        document.write(`
            <li>${element}</li>
        `);
    }
    document.write('</ul>');
}
const createListOfPrimitives = array => {
    const nums = [];
    const strs = [];
    const bools = [];
    for (let i = 0; i < array.length; ++i) {
        typeof primitives[i] === 'number' ?
            nums[nums.length] = array[i] : (typeof array[i] === 'string' ?
                strs[strs.length] = array[i] : bools[bools.length] = array[i]);
    }
    // console.log(nums);
    // console.log(strs);
    // console.log(bools);
    utilFunc('Num list', nums);
    utilFunc('Str list', strs);
    utilFunc('Bool list', bools);
}
createListOfPrimitives(primitives);
document.write(separator);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write('<h3>TASK - 9</h3>');
const objects = [
    {
        id: 1,
        name: 'vasya',
        age: 19
    },
    {
        id: 2,
        name: 'petya',
        age: 20
    },
    {
        id: 3,
        name: 'roma',
        age: 21
    }
];
const printObjects = objArray => {
    for (const obj of objArray) {
        document.write('<div class="block">');
        for (let key in obj) {
            document.write(`${key} : ${obj[key]}<br>`);
        }
        document.write('</div>');
    }
}
printObjects(objects);
document.write(separator);



// - створити функцію яка повертає найменьше число з масиву
console.log('TASK - 10');
const getMimArrayValue = array => {
    let min = array[0];
    for (let i = 1; i < array.length; ++i) {
        if (array[i] < min) min = array[i];
    }
    return min;
}
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('min value is ' + getMimArrayValue(numArr));
console.log(separator);



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log('TASK - 11');
const sum = arr => {
    let resSum = 0;
    for (const num of arr) {
        resSum += num;
    }
    return resSum;
}
console.log('sum of values in');
console.log(numArr);
console.log('is ' + sum(numArr));
console.log(separator);



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log('TASK - 12');
const forSwapArr = [11, 22, 33, 44];
const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
console.log('before');
console.log(forSwapArr);
swap(forSwapArr, 0, 1);
console.log('after');
console.log(forSwapArr);
console.log(separator);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
console.log('TASK - 13');
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeValue;
    for (const obj of currencyValues) {
        if (obj.currency === exchangeCurrency) exchangeValue = obj.value;
    }
    return sumUAH / exchangeValue;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
