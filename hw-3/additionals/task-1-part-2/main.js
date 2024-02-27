let separator = '--------------------------';
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 'qwe';
arr[4] = 'asd';
arr[5] = 'zxc';
arr[6] = true;
arr[7] = true;
arr[8] = false;
arr[9] = 999;
for (const element of arr) {
    console.log(element);
}
console.log(separator);


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('loop with step 1, 10 iterations')
document.write('<h3>loop with step 1, 10 iterations</h3>');
for (let i = 0; i < 10; ++i) {
    console.log(i);
    document.write(i + ' ');
}
console.log(separator);


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('loop with step 1, 100 iterations')
document.write('<h3>loop with step 1, 100 iterations</h3>');
for (let i = 0; i < 100; ++i) {
    console.log(i);
    document.write(i + ' ');
}
console.log(separator);


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('loop with step 2, 100 iterations')
document.write('<h3>loop with step 2, 100 iterations</h3>');
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i + ' ');
}
console.log(separator);


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//        ~~~~~       реалізація аналогічна до попередньої      ~~~~~


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('loop with step 2, 100 iterations, odd steps')
document.write('<h3>loop with step 2, 100 iterations, odd steps</h3>');
for (let i = 1; i < 100; i += 2) {
    console.log(i);
    document.write(i + ' ');
}
console.log(separator);




console.log('~~~~~~~~~ NEW PART ~~~~~~~~~');
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {
        title: 'Abrakadabra',
        pages: 100,
        authors: ['Vasya', 'Oleh'],
        genres: ['fantasy', 'magic']
    },
    {
        title: 'SHerlok',
        pages: 400,
        authors: ['Tom', 'Jerry'],
        genres: ['detective', 'comedy', 'history']
    },
    {
        title: 'Lalalupupu',
        pages: 800,
        authors: ['Artuarito', 'Pavlinio', 'Papucci'],
        genres: ['novel', 'drama']
    },
    {
        title: 'Cucyk',
        pages: 70,
        authors: ['Arnold'],
        genres: ['animals', 'nature']
    }
];


// -знайти наібльшу книжку.
let maxPages = books[0]['pages'];
let maxPagesIndex = 0;
for (let i = 1; i < books.length; ++i) {
    if (books[i]['pages'] > maxPages) {
        maxPages = books[i]['pages'];
        maxPagesIndex = i;
    }
}
console.log('max pages book')
console.log(books[maxPagesIndex]);
console.log(separator);
document.write('<h2>max pages book</h2>');
document.write(JSON.stringify(books[maxPagesIndex], null, 2).replace(/\n/g, '<br>'));


// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenres = books[0]['genres'].length;
let maxGenresIndex = 0;
for (let i = 1; i < books.length; ++i) {
    if (books[i]['genres'].length > maxGenres) {
        maxGenres = books[i]['genres'].length;
        maxGenresIndex = i;
    }
}
console.log('max Genres book')
console.log(books[maxGenresIndex]);
console.log(separator);
document.write('<h2>max genres book</h2>');
document.write(JSON.stringify(books[maxGenresIndex], null, 2).replace(/\n/g, '<br>'));


// - знайти книжку/ки з найдовшою назвою
let maxTitle = books[0]['title'].length;
let maxTitleIndex = 0;
for (let i = 1; i < books.length; ++i) {
    if (books[i]['title'].length > maxTitle) {
        maxTitle = books[i]['title'].length;
        maxTitleIndex = i;
    }
}
console.log('max title length book')
console.log(books[maxTitleIndex]);
console.log(separator);
document.write('<h2>max title length book</h2>');
document.write(JSON.stringify(books[maxTitleIndex], null, 2).replace(/\n/g, '<br>'));


// - знайти книжку/ки які писали 2 автори
let authors = [];
for (let i = 0; i < books.length; ++i) {
    if (books[i]['authors'].length === 2) {
        authors.push(books[i]);
    }
}
console.log('2 authors book')
document.write('<h2>2 authors book</h2>');
for (const author of authors) {
    console.log(author);
    document.write(JSON.stringify(author, null, 2).replace(/\n/g, '<br>') + '<br>-----------------<br>');
}
console.log(separator);


// - знайти книжку/ки які писав 1 автор
let solists = [];
for (let i = 0; i < books.length; ++i) {
    if (books[i]['authors'].length === 1) {
        solists.push(books[i]);
    }
}
console.log('1 author book')
document.write('<h2>1 author book</h2>');
for (const solist of solists) {
    console.log(solist);
    document.write(JSON.stringify(solist, null, 2).replace(/\n/g, '<br>') + '<br>-----------------<br>');
}
console.log(separator);