let separator = '--------------------------';
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const nums = [1, 2, 3, 4, 5],
    strs = ['first', 'second', 'third', 'fourth', 'fifth'],
    union = [1, 2, 'text', true, false];
console.log(nums + '\n' + strs + '\n' + union);
console.log(separator);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const randArr = [];
randArr[0] = 1;
randArr[1] = 'gfg';
randArr[2] = 'omg';
randArr[3] = {};
randArr[4] = false;
console.log(randArr + '\n' + separator);



// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
console.log('1 - iteration with WHILE');
const numsRand = [2,17,13,6,22,31,45,66,100,-18];
let j = 0;
while (j < numsRand.length) {
    console.log(numsRand[j] + ' ');
    ++j;
}
console.log(separator);



//     2. перебрати його циклом for
console.log('2 - iteration with FOR');
for (const num of numsRand) {
    console.log(num + ' ');
}
console.log(separator);



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('3 - odd indexes with WHILE'); // саме індекси
let k = 1;
while (k < numsRand.length) {
    console.log(k + ' : ' + numsRand[k]);
    k += 2;
}
console.log(separator);



// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('4 - odd indexes with FOR'); // саме індекси
for (let i = 1; i < numsRand.length; i += 2) {
    console.log(i + ' : ' + numsRand[i]);
}
console.log(separator);



// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('5 - even values with WHILE'); // саме значення
let l = 0; // оскільки загальне формулювання парних чисел - це всі ті числа,
                   // які без остачі діляться на 2, то по ідеї 0 теж парний
while (l < numsRand.length) {
    if (numsRand[l] % 2 === 0) console.log(l + ' : ' + numsRand[l]);
    ++l;
}
console.log(separator);



// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('6 - even values with FOR'); // саме значення
for (let i = 0; i < numsRand.length; ++i) {
    if (numsRand[i] % 2 === 0) console.log(i + ' : ' + numsRand[i]);
}
console.log(separator);



// 7. замінити кожне число кратне 3 на слово "okten"
console.log('7 - replace (... % 3 === 0) to "okten"');
for (let i = 0; i < numsRand.length; ++i) {
    // цікавий момент, спочатку я тут подумав що неправильно написав код, а саме у моменті
    // " ? numsRand[i] = 'okten' ", мені здавалося що я лише присвоюю нове значення для
    // numsRand[i], але при цьому вказівки на виведення значення у мене немає, але як виявилось
    // оператор = не просто присвоює значення, а ще й повертає його, тобто діє як вираз.
    // Таким чином 'okten' вивелось, хоча може таке є і в інших мовах, і просто я дуб-дерево
    console.log(`before -> ${numsRand[i]} | after -> ${numsRand[i] % 3 === 0 ? numsRand[i] = 'okten' : numsRand[i]}`);
}
console.log(separator);



// 8. вивести масив в зворотньому порядку.
console.log('8 - reversed array');
let tempArr = [];
// for (let i = numsRand.length - 1; i >= 0; --i) {
//     tempArr.push(numsRand[i]);
// }
//
// або так
for (let i = numsRand.length - 1, j = 0; i >= 0; --i, ++j) {
    tempArr[j] = numsRand[i];
}
console.log('before - ' + numsRand);
//
// або так
// tempArr = numsRand.toReversed();
console.log('after - ' + tempArr);
console.log(separator);





// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log('#############################');
console.log('9 - all reversed');
const numsRand2 = [2,17,13,6,22,31,45,66,100,-18];


// 1 перебрати його циклом while
console.log('9.1 - reverse iteration with WHILE');
let q = numsRand2.length - 1;
while (q >= 0) {
    console.log(numsRand2[q] + ' ');
    --q;
}
console.log(separator);


// 2 перебрати його циклом for
console.log('9.2 - reverse iteration with FOR');
for (let i = numsRand2.length - 1; i >= 0 ; --i) {
    console.log(numsRand2[i] + ' ');
}
console.log(separator);


// 3 перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('9.3 - odd indexes with WHILE'); // саме індекси
// логіка така, якщо у мене масив з довжиною в 10, то останній індекс непарний
// і тут я перевіряю це, щоб початковий індекс ітерації був непарним
let w = numsRand2.length % 2 === 0 ? numsRand2.length - 1 : numsRand2.length - 2;
while (w >= 0) {
    console.log(w + ' : ' + numsRand2[w]);
    w -= 2;
}
console.log(separator);


// 4 перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('9.4 - odd indexes with FOR'); // саме індекси
for (let i = numsRand2.length % 2 === 0 ? numsRand2.length - 1 : numsRand2.length - 2; i >= 0; i -= 2) {
    console.log(i + ' : ' + numsRand2[i]);
}
console.log(separator);


// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('9.5 - even values with WHILE'); // саме значення
let e = numsRand2.length - 1; // оскільки загальне формулювання парних чисел - це всі ті числа,
// які без остачі діляться на 2, то по ідеї 0 теж парний
while (e >= 0) {
    if (numsRand2[e] % 2 === 0) console.log(e + ' : ' + numsRand2[e]);
    --e;
}
console.log(separator);


// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('9.6 - even values with FOR'); // саме значення
for (let i = numsRand2.length - 1; i >= 0; --i) {
    if (numsRand2[i] % 2 === 0) console.log(i + ' : ' + numsRand2[i]);
}
console.log(separator);


// 7. замінити кожне число кратне 3 на слово "okten"
console.log('9.7 - replace (... % 3 === 0) to "okten"');
for (let i = numsRand2.length - 1; i >= 0; --i) {
    console.log(`before -> ${numsRand2[i]} | after -> ${numsRand2[i] % 3 === 0 ? numsRand2[i] = 'okten' : numsRand2[i]}`);
}
console.log(separator);



console.log('NEW PART');
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const tenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of tenNums) {
    console.log(num);
}
console.log(separator);


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const tenStrs = ['qwe', 'rty', 'uio', 'asd', 'fgh', 'jkl', 'zxc', 'vbn', 'php', 'txt'];
for (const str of tenStrs) {
    console.log(str);
}
console.log(separator);


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const tenRandValues = [...nums, ...strs];
for (const value of tenRandValues) {
    console.log(value);
}
console.log(separator);


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const tenRandDiffValues = [true, false, true, 'asd', 'fffgdgdf', 3, 999, 'dafsf', 3210, false];
console.log(' ~~~ boolean ~~~ ');
for (const value of tenRandDiffValues) {
    if (typeof value === 'boolean') console.log(value);
}
console.log(separator);
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log(' ~~~ number ~~~ ');
for (const value of tenRandDiffValues) {
    if (typeof value === 'number') console.log(value);
}
console.log(separator);
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log(' ~~~ string ~~~ ');
for (const value of tenRandDiffValues) {
    if (typeof value === 'string') console.log(value);
}
console.log(separator);