let separator = '--------------------------';
// ##################### Масиви та об'єкти: #####################
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums[0], nums[1], nums[2], nums[3], nums[4], nums[5], nums[6], nums[7], nums[8], nums[9]);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
    title: 'book1',
    pageCount: 100,
    genre: 'fantasy'
};

const book2 = {
    title: 'book2',
    pageCount: 200,
    genre: 'horror'
};

const book3 = {
    title: 'book3',
    pageCount: 300,
    genre: 'some genre'
};



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book4 = {
    title: 'book4',
    pageCount: 400,
    genre: 'fantasy',
    authors: [
        {
            name: 'petya',
            age: 19
        },
        {
            name: 'vasyok',
            age: 20
        }
    ]
};

const book5 = {
    title: 'book5',
    pageCount: 500,
    genre: 'horror',
    authors: [
        {
            name: 'yurchik',
            age: 21
        },
        {
            name: 'romka',
            age: 22
        }
    ]
};

const book6 = {
    title: 'book6',
    pageCount: 600,
    genre: 'some genre',
    authors: [
        {
            name: 'bohdan',
            age: 19
        },
        {
            name: 'max',
            age: 39
        }
    ]
};



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {
        name: 'vasya',
        username: 'VaSyA',
        password: 'vasya2001'
    },
    {
        name: 'petya',
        username: 'lox',
        password: 'grt__?2002'
    },
    {
        name: 'kolya',
        username: 'mYko',
        password: 'kol?_2003'
    },
    {
        name: 'anton',
        username: 'GunTon',
        password: '07zxc2004'
    },
    {
        name: 'sanya',
        username: 'vox3l',
        password: 'krasav2005'
    },
    {
        name: 'roman',
        username: 'GabenLox',
        password: 'qweasd2006'
    },
    {
        name: 'serhii',
        username: 'GrayHead',
        password: 'cool_man37'
    },
    {
        name: 'bohdan',
        username: '++i',
        password: 'bhd_exe?2007'
    },
    {
        name: 'edik',
        username: 'EDamn',
        password: 'E_dick2008'
    },
    {
        name: 'artem',
        username: 'Metraam',
        password: 'atrenka2009'
    }
];

console.log(separator);
// на скільки я розумію, то зараз ми повинні виконувати цю дз без циклів
console.log(users[0]['password'] + '\n' + users[1]['password'] + '\n' + users[2]['password'] + '\n' +
    users[3]['password'] + '\n' + users[4]['password'] + '\n' + users[5]['password'] + '\n'
    + users[6]['password'] + '\n' + users[7]['password'] + '\n' + users[8]['password'] + '\n' + users[9]['password']);
console.log(separator);





// ##################### Логічні розгалуження: #####################
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
// let x = 0;
// let x = -3;
if (x !== 0) console.log('Вірно');
else console.log('Невірно');

console.log(separator);



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 22;

if (time >= 0 && time <= 15) console.log('1/4');       // не писав {} бо один console.log(); у нас тільки тут
else if (time >= 16 && time <= 30) console.log('2/4');
else if (time >= 31 && time <= 45) console.log('3/4');
else console.log('4/4');

console.log(separator);



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;

if (day >= 1 && day <= 11) console.log('1/3');
else if (day >= 11 && day <= 20) console.log('2/3');
else console.log('3/3');

console.log(separator);



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const days = ['Monday', 'Wednesday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let choice = +prompt('Enter the number of a day');

switch (choice) {
    case 1:
        console.log(days[choice - 1]);
        alert(days[choice - 1]);
        break;
    case 2:
        console.log(days[choice - 1]);
        alert(days[choice - 1]);
        break;
    case 3:
        console.log(days[choice - 1]);
        alert(days[choice - 1]);
        break;
    case 4:
        console.log(days[choice - 1]);
        alert(days[choice - 1]);
        break;
    case 5:
        console.log(days[choice - 1]);
        alert(days[choice - 1]);
        break;
    case 6:
        console.log(days[choice - 1]);
        alert(days[choice - 1]);
        break;
    case 7:
        console.log(days[choice - 1]);
        alert(days[choice - 1]);
        break;
    default:
        console.log('!!!ERROR!!! Incorrect input');
        alert('!!!ERROR!!! Incorrect input');
        break;
}

console.log(separator);



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstNumber = +prompt('Enter the first number');
let secondNumber = +prompt('Enter the second number');

if (firstNumber > secondNumber) {
    console.log(firstNumber + ' > ' + secondNumber);
    alert(firstNumber + ' > ' + secondNumber);
} else if (firstNumber === secondNumber) {
    console.log(firstNumber + ' === ' + secondNumber);
    alert(firstNumber + ' === ' + secondNumber);
} else {
    console.log(firstNumber + ' < ' + secondNumber);
    alert(firstNumber + ' < ' + secondNumber);
}

console.log(separator);



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let varX = '';
if (varX === false || varX === 0 || varX === -0 || varX === 0n || varX === '' || varX === null || varX === undefined || varX === NaN) varX = 'default';

console.log('varX value => ' + varX);
console.log(separator);



//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) console.log('Супер');
if (coursesAndDurationArray[1]['monthDuration'] > 5) console.log('Супер');
if (coursesAndDurationArray[2]['monthDuration'] > 5) console.log('Супер');
if (coursesAndDurationArray[3]['monthDuration'] > 5) console.log('Супер');
if (coursesAndDurationArray[4]['monthDuration'] > 5) console.log('Супер');
if (coursesAndDurationArray[5]['monthDuration'] > 5) console.log('Супер');