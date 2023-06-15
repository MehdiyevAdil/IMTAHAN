// navbar js
const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');

})
const wishlist_container = document.getElementById("wishlist_container");
let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));

wishlist_arr.forEach((element) => {
  const card = document.createElement('div');
  const cardImg = document.createElement('div');
  card.append(cardImg);
  cardImg.className = 'fullImgSize';
  card.className = 'fullSize';
  cardImg.style.backgroundImage = `url(${element.img})`;
  console.log(card);
  wishlist_container.append(card);
  // CARD CONTENT date,name,bestekat
  const date = document.createElement('p');
  const dateApi = element.date;
  date.append(dateApi);
  card.append(date);

  const name = document.createElement('h2');
  const nameApi = element.tamasa;
  name.append(nameApi);
  card.append(name);

  const composer = document.createElement('h3');
  const composerApi = element.bəstəkar;
  composer.append(composerApi);
  card.append(composer);
//   butonnarin saxlayan div ve sil bilet al butonlari
  let buttons = document.createElement('div');
  buttons.className='wishlistButtonsDiv';
  let btnBilet = document.createElement('a');
  btnBilet.className="wishlistBtnSize";
  btnBilet.innerText = "Bilet al";
  btnBilet.target = '_blank'
  btnBilet.href = 'biletSecimi.html#'+element.id;
// sil buttonu
  const btnSil = document.createElement("button");
  btnSil.innerHTML = "Sil";
  btnSil.className="wishlistBtnSize";
  btnSil.onclick = () => {
    console.log(element.id);
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    card.remove();
  };

  buttons.append(btnSil,btnBilet);
  card.append(buttons)
});
