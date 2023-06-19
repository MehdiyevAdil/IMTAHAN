let basket_arr = [];
let wishlist_arr = [];
window.onload = function () {
  if (localStorage.getItem("basket") !== null) {
    basket_arr = JSON.parse(localStorage.getItem("basket"));
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  }
};
let fullContent = document.querySelector(".fullContent");
let urlFullThamasa = "http://localhost:3000/fullTamasalar";
fetch(urlFullThamasa)
  .then(res => res.json())
  .then((data) => {
    data.forEach(element => {
      // afisha card ve cardImg
      let card = document.createElement('div');
      let cardImg = document.createElement('div');
      card.append(cardImg)
      cardImg.className = 'fullImgSize';
      card.className = 'fullSize';
      cardImg.style.backgroundImage = `url(${element.img})`;
      console.log(card);
      fullContent.append(card);
      // CARD CONTENT date,name,bestekat
      let date = document.createElement('p');
      let dateApi = element.date;
      date.append(dateApi);
      card.append(date);

      let name = document.createElement('h2');
      let nameApi = element.tamasa;
      name.append(nameApi);
      card.append(name);

      let composer = document.createElement('h3');
      let composerApi = element.bestekar;
      composer.append(composerApi);
      card.append(composer);

      const btnbasket = document.createElement('a');
      btnbasket.className = 'btnWishList';
      card.append(btnbasket);
      btnbasket.innerText = 'Bilet al';
      btnbasket.href = 'biletSecimi.html#' + element.id;
      console.log(btnbasket)
      // card.target = '_blank';
      //   card.href = 'cardDetalis.html#' + element.id;
      let btnWishlist = document.createElement('i');
      btnWishlist.className = 'fa-solid fa-heart';
      card.append(btnWishlist);
      // AAA
      btnWishlist.onclick = () => {
        if (wishlist_arr.find((x) => x.id == element.id) === undefined) {
          wishlist_arr.push(element);
          btnWishlist.style.color = "red";
        } else {
          wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
          btnWishlist.style.color = "white";
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist_arr)); // Burada kaydetme işlemini yapın
      };
    });
  })

// navbarhanburger menu
const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
  list.classList.toggle('listOpen');

})