// navbar js
const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');

})

let newsContent = document.querySelector(".newsContent");
let myNewsBasliq = document.querySelector('.myNewsBasliq');
let newsUrl = "http://localhost:3000/news";

fetch(newsUrl)
  .then(res => res.json())
  .then((data) => {
    data.forEach(element => {
      let card = document.createElement('a');
      // let cardImg = document.createElement('div');
      // cardImg.className = 'newsImgSize';
      card.className = 'newsSize';
      // cardImg.style.backgroundImage = `url(${element.img})`;
      card.style.backgroundImage = `url(${element.img})`;
      // card.append(cardImg);
      newsContent.append(card);

      let name = document.createElement('h2');
      let nameApi = element.name;
      name.append(nameApi);
      card.append(name);

      card.target = '_blank';
      card.href = 'newsDetalis.html#' + element.id;

      let h2 = document.createElement('h2');
      let nameApi2 = element.name; 
      h2.append(nameApi2); 
      myNewsBasliq.append(h2);
    });
  })
 
