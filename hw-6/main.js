let separator = '--------------------------';
console.log('########## FIRST PART ##########')
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('TASK - 1');
const strs = ['hello world', 'lorem ipsum', 'javascript is cool'];
strs.forEach(item => console.log('current element length is: ' + item.length));
console.log(separator);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('TASK - 2');
strs.forEach(item => console.log(item.toUpperCase()));
console.log(separator);



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('TASK - 3');
const upperStrs = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
strs.forEach(item => console.log(item.toLowerCase()));
console.log(separator);



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('TASK - 4');
let str = ' dirty string   ';
console.log(str.trim()); // на лекції про цей метод не розповідали, але казали де можна подивитися усі
                         // методи стрінгів, тому думаю що все ок
console.log(separator);



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log('TASK - 5');
let str2 = 'Ревуть воли як ясла повні';
const stringToarray = str => str.split(' ');
console.log(stringToarray(str2));



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('TASK - 6');
const nums = [10,8,-7,55,987,-1011,0,1050,0];
console.log(nums.map(element => element + ''));
console.log(separator);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('TASK - 7');
let nums2 = [11,21,3];
const sortNums = (arr, direction) => {
    return direction === 'ascending' ?
        arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
};
console.log(sortNums(nums2, 'ascending'));
console.log(sortNums(nums2, 'descending'));
console.log(separator);



console.log('########## SECOND PART ##########');
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log('sorting by monthDuration - max to min');
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(separator);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('filtering by monthDuration > 5');
console.log(coursesAndDurationArray.filter(element=> element.monthDuration > 5));
console.log(separator);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}



console.log('########## THIRD PART ##########');
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const deck = [
    { suit: 'spade', value: '6', color: 'black' },
    { suit: 'spade', value: '7', color: 'black' },
    { suit: 'spade', value: '8', color: 'black' },
    { suit: 'spade', value: '9', color: 'black' },
    { suit: 'spade', value: '10', color: 'black' },
    { suit: 'spade', value: 'jack', color: 'black' },
    { suit: 'spade', value: 'queen', color: 'black' },
    { suit: 'spade', value: 'king', color: 'black' },
    { suit: 'spade', value: 'ace', color: 'black' },

    { suit: 'diamond', value: '6', color: 'red' },
    { suit: 'diamond', value: '7', color: 'red' },
    { suit: 'diamond', value: '8', color: 'red' },
    { suit: 'diamond', value: '9', color: 'red' },
    { suit: 'diamond', value: '10', color: 'red' },
    { suit: 'diamond', value: 'jack', color: 'red' },
    { suit: 'diamond', value: 'queen', color: 'red' },
    { suit: 'diamond', value: 'king', color: 'red' },
    { suit: 'diamond', value: 'ace', color: 'red' },

    { suit: 'heart', value: '6', color: 'red' },
    { suit: 'heart', value: '7', color: 'red' },
    { suit: 'heart', value: '8', color: 'red' },
    { suit: 'heart', value: '9', color: 'red' },
    { suit: 'heart', value: '10', color: 'red' },
    { suit: 'heart', value: 'jack', color: 'red' },
    { suit: 'heart', value: 'queen', color: 'red' },
    { suit: 'heart', value: 'king', color: 'red' },
    { suit: 'heart', value: 'ace', color: 'red' },

    { suit: 'clubs', value: '6', color: 'black' },
    { suit: 'clubs', value: '7', color: 'black' },
    { suit: 'clubs', value: '8', color: 'black' },
    { suit: 'clubs', value: '9', color: 'black' },
    { suit: 'clubs', value: '10', color: 'black' },
    { suit: 'clubs', value: 'jack', color: 'black' },
    { suit: 'clubs', value: 'queen', color: 'black' },
    { suit: 'clubs', value: 'king', color: 'black' },
    { suit: 'clubs', value: 'ace', color: 'black' }
];
// - знайти піковий туз
console.log('spade ace finding');
console.log(deck.find(card => card.suit === 'spade' && card.value === 'ace'));
console.log(separator);


// - всі шістки
console.log('all 6 finding');
const valueIs6 = deck.reduce((acc, element) => {
    if (element.value === '6') acc.push(element);
    return acc;
}, []);
console.log(valueIs6);
console.log(separator);


// - всі червоні карти
console.log('all red finding');
const redCards = deck.reduce((acc, element) => {
    if (element.color === 'red') acc.push(element);
    return acc;
}, []);
console.log(redCards);
console.log(separator);


// - всі буби
console.log('all diamond finding');
const withDiamondCards = deck.reduce((acc, element) => {
    if (element.suit === 'diamond') acc.push(element);
    return acc;
}, []);
console.log(withDiamondCards);
console.log(separator);


// - всі трефи від 9 та більше
console.log('all clubs >= 9 finding');
let allClubsFrom9 = deck.reduce((acc, element) => {
    // фігня фігньой, але ту роботу для якої написано виконує

    // якщо завдання заключалося в знаходженні тільки карт з числовими значеннями, то все простіше
    // перевіряємо тільки чи при парсінгу в інт наше значення більше/дорівнює 9
    // але я зрозумів це так що і не тільки з числовими значеннями карти мають шукатися
    if (element.suit === 'clubs') {
        if (parseInt(element.value)) {
            if (parseInt(element.value) >= 9) {
                acc.push(element);
            }
        } else {
            acc.push(element);
        }
    }
    return acc;
}, []);
console.log(allClubsFrom9);
console.log(separator);



console.log('########## FOURTH PART ##########');
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('sorted by suit deck');
let sortedBySuitDeck = deck.reduce((acc, element) => {
        if (element.suit === 'spade') acc.spades.push(element);
        else if (element.suit === 'diamond') acc.diamonds.push(element);
        else if (element.suit === 'heart') acc.hearts.push(element);
        else acc.clubs.push(element);

        return acc;
    },
    {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    });
console.log(sortedBySuitDeck);
console.log(separator);



console.log('########## FIFTH PART ##########');
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log('objects with sass module');
let withSassModule = coursesArray.reduce((acc, element) => {
    if (element.modules.includes('sass')) acc.push(element);

    return acc;
}, []);
console.log(withSassModule);
console.log(separator);


// --написати пошук всіх об'єктів, в який в modules є docker
console.log('objects with docker module');
let withDockerModule = coursesArray.reduce((acc, element) => {
    if (element.modules.includes('docker')) acc.push(element);

    return acc;
}, []);
console.log(withDockerModule);
console.log(separator);