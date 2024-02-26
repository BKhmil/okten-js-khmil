let separator = '--------------------------';
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
const randTxtArr = ['qwe', 'rty', 'yui', 'asd', 'fgh', 'jkl', 'zxc', 'vbn', 'bmn', 'dif'];
for (const str of randTxtArr) {
    document.write(`<div>${str}</div>`);
}
document.write(separator);
document.write('<br>');




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < randTxtArr.length; ++i) {
    document.write(`<div>${i} - ${randTxtArr[i]}</div>`);
}
document.write(separator);




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
const bigRandTxtArr = [...randTxtArr, 'ggd', 'giu', 'guy', 'mnp', 'npm', 'obd', 'omg', 'qod', 'pod', 'qrt'];
let j = 0;
while (j < bigRandTxtArr.length) {
    document.write(`<h1>${bigRandTxtArr[j]}</h1>`);
    ++j;
}
document.write(separator);




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let k = 0
while (k < bigRandTxtArr.length) {
    document.write(`<h1>${k} - ${bigRandTxtArr[k]}</h1>`);
    ++k;
}
document.write(separator);
