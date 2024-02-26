let separator = '--------------------------';
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write('Status - true<ul>');
// як виявилось, document.write(); ігнорує символ переносу рядку і таби, тому об'єкт "скукожувався"
// ну і я замінив символ переносу на br-ку, якраз сьогодні робив лабу по php на регулярки,
// хоча зрозумів нормально тільки як шукати всі/перше входження чогось одного
for (const user of users) {
    if (user['status']) {
        document.write(`<li>
            ${JSON.stringify(user, null, 1).replace(/\n/g, '<br>')} 
        </li>`);
    }
}
document.write('</ul>');
document.write(separator);
document.write('<br>');




// - користувачів зі статусом false
document.write('Status - false<ul>');
for (const user of users) {
    if (!user['status']) {
        document.write(`<li>
            ${JSON.stringify(user, null, 1).replace(/\n/g, '<br>')} 
        </li>`);
    }
}
document.write('</ul>');
document.write(separator);
document.write('<br>');




// - користувачів які старші за 30 років
document.write('Age > 30<ul>');
for (const user of users) {
    if (user['age'] > 30) {
        document.write(`<li>
            ${JSON.stringify(user, null, 1).replace(/\n/g, '<br>')} 
        </li>`);
    }
}
document.write('</ul>');
