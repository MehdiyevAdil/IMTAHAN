// 1) slide started
function mySlide() {
  let currentSlide = 1;
  let intervalId;
  function showSlide(slideIndex) {
    const slides = document.getElementsByClassName('carouselImgs');
    if (slideIndex > slides.length) { currentSlide = 1 }
    if (slideIndex < 1) { currentSlide = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slides[currentSlide - 1].style.display = 'flex'
  }

  // slide start
  function nextSlide() {
    showSlide(currentSlide += 1);
  }

  function previousSlide() {
    showSlide(currentSlide -= 1);
  }

  function startSlideshow() {
    intervalId = setInterval(function () {
      nextSlide();
    }, 3000); // 3000ms (3 seconds) aralıklarla slaytları değiştirir
  }

  function stopSlideshow() {
    clearInterval(intervalId);
  }

  window.onload = function () {
    showSlide(currentSlide);
    document.getElementById('prev').addEventListener('click', function () {
      previousSlide();
    });
    document.getElementById('next').addEventListener('click', function () {
      nextSlide();
    });

    startSlideshow(); // Slayt gösterisini otomatik olarak başlatır

    // Durdurma ve yeniden başlatma için olay dinleyicileri ekleyebilirsiniz
    // document.getElementById('stop').addEventListener('click', function () {
    //   stopSlideshow();
    // });
    document.getElementById('start').addEventListener('click', function () {
      startSlideshow();
    });
  }
}
mySlide();

// slide end

// 2) thamasa APi sinden gelen infolar started  
// qeyd:APi-ye POST etmek prosesi yalniz Admin oz loginine daxil olub edebiler (hele qalib)
function thamasaApi() {
  const slides = document.querySelectorAll('.carouselImgs');
  let url = 'http://localhost:3000/fullTamasalar';

  fetch(url)
    .then(res => res.json())
    .then((data) => {
      slides.forEach((slide, index) => {
        slide.style.backgroundImage = `url(${data[index].slide})`;
        slide.innerText = data[index].tamasa;
        let button = document.createElement('a');
        button.innerText = "BILET AL";
        button.target = '_blank'
        button.href = 'biletSecimi.html';

        slide.append(button)

      });
    });
}
thamasaApi();
// thamasa APi sinden gelen infolar end

// 3)fullThamasalar Api started
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
function fullThamasa() {
  let sectionTwoContent = document.querySelector(".sectionTwoContent");
  let sectionTwo = document.querySelector(".sectionTwo");

  let urlFullThamasa = "http://localhost:3000/fullTamasalar";
  fetch(urlFullThamasa)
    .then(res => res.json())
    .then((data) => {
      data.slice(0, 6).forEach(element => {
        // afisha card ve cardImg
        let card = document.createElement('div');
        let cardImg = document.createElement('div');
        card.append(cardImg)
        cardImg.className = 'cardImgSize';
        card.className = 'cardSize';
        cardImg.style.backgroundImage = `url(${element.img})`;
        console.log(card);
        sectionTwoContent.append(card);
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
        let composerApi = element.bəstəkar;
        composer.append(composerApi);
        card.append(composer);
        const btnBasket = document.createElement('a');
        btnBasket.className = 'btnBasket';
        card.append(btnBasket);
        btnBasket.innerText = 'Bilet al';
        btnBasket.target = '_blank';
        btnBasket.href = 'biletSecimi.html#'+element.id;
        
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
          localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
        };
        

      });

      const full = document.createElement('a');
      full.className = 'btnFull';
      sectionTwo.append(full);
      full.innerText = 'Hamısına bax';
      full.target = '_blank';
      full.href = 'fullCardSeries.html';

    })

}
fullThamasa();
//fullThamasalar Api end

// 4)video control started
function videoMuteControl() {
  let video = document.getElementById("myVideo");
  let muteButton = document.getElementById("muteButton");

  muteButton.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  });
}
videoMuteControl();
//video control end
// 5) navbarhanburger started
const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
  list.classList.toggle('listOpen');

})

