let bediHeyet = document.querySelector('.bediHeyet');
let bediHeyetContent = document.querySelector('.bediHeyetContent');
let urlFullHeyet = 'http://localhost:3000/bediHeyet';
fetch(urlFullHeyet)
    .then(res => res.json())
    .then((data) => {
        data.forEach(element => {
            let card = document.createElement('div')
            card.className = 'bediHeyetCardSize';
            let cardImg = document.createElement('div');
            cardImg.style.backgroundImage = `url(${element.img})`;
            cardImg.className = 'bediHeyetImgSize';
            card.append(cardImg)
            bediHeyetContent.append(card);
            // console.log(card);
            let name = document.createElement('h2');
            let nameApi = element.name;
            name.append(nameApi)
            card.append(name)
            console.log(card);
            let lar = document.createElement('p');
            let larApi = element.lar;
            lar.append(larApi);
            card.append(lar);
        });
    });
// navbar js
const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');
    

})