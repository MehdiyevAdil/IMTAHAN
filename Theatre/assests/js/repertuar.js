// navbar js
const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');

})

//repertuar
let repertuarText = document.querySelector(".repertuarText");
let urlFullThamasa = "http://localhost:3000/fullTamasalar";
fetch(urlFullThamasa)
  .then(res => res.json())
  .then((data) => {
    data.forEach(element => {
      // afisha repertuarText ve cardImg
      let card = document.createElement('div');
      card.className = 'repertuarSize';
      repertuarText.append(card)
      let name = document.createElement('h2');
      let nameApi = element.tamasa;
      name.append(nameApi);
      card.append(name);
      let composer = document.createElement('h3');
      let composerApi = element.bəstəkar;
      composer.append(composerApi);
      card.append(composer);
      let janr = document.createElement('h4');
      let janrApi = element.janr;
      janr.append(janrApi);
      card.append(janr);
    });
  })