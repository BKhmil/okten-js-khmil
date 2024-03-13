// вставляти в консоль на сайті https://mixkit.co/free-stock-music/
function getObjArr() {
    const resArr = [];
    document.querySelectorAll('.item-grid__item').forEach(element => {
        let titleText = element.querySelector('.item-grid-card__title').innerText;
        let authorName = element.querySelector('.item-grid-music-preview__author').innerText;
        let music = element.getElementsByTagName('audio');
        resArr.push({title: titleText, author: authorName, src: music[0].src});
    });

    return resArr;
}
