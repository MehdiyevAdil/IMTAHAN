// detalis fetch
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
const detalis = document.querySelector('.detalis');
const btnDetalis=document.querySelector('.btnDetalis')
const cardDetalisInfo=document.querySelector('.cardDetalisInfo');
const link = window.location.hash.slice(1);
const btnBiletSec=document.querySelector('#btnBiletSec');
const apiDetalisUrl=`http://localhost:3000/fullTamasalar/${link}`;
fetch(apiDetalisUrl)
    .then((res) => res.json())
    .then((data) => {
        let cardImg = document.createElement('div');
        detalis.append(cardImg)
        cardImg.className = 'detalImgSize';
        detalis.className = 'detalSize';
        cardImg.style.backgroundImage = `url(${data.img})`;
        console.log(detalis);
        // CARD CONTENT date,name,bestekat
        let date = document.createElement('p');
        let dateApi = data.date;
        date.append(dateApi);
        detalis.append(date);

        let name = document.createElement('h2');
        let nameApi = data.tamasa;
        name.append(nameApi);
        cardDetalisInfo.append(name);

        let composer = document.createElement('h3');
        let composerApi = data.bəstəkar;
        composer.append(composerApi);
        detalis.append(composer);
        let infoApi=data.info;
        cardDetalisInfo.append(infoApi);
        console.log(cardDetalisInfo);
        btnBiletSec.href = 'biletSecimi.html#' + data.id;
        let btnWishlist = document.createElement('button');
        btnWishlist.innerHTML="Əlavə et";
        btnWishlist.className = 'btnPageDetalis';
        btnDetalis.append(btnWishlist);
        // AAA
        btnWishlist.onclick = function() {
            if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
              wishlist_arr.push(data);
              btnWishlist.innerText = "Bəyəndiniz";
            } else {
              wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
              btnWishlist.innerText = "Əlavə et";

            }
            localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
          };
      });
// navbar
function multiNavbar(){
    const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
  list.classList.toggle('listOpen');

})
}

// proses
multiNavbar();
