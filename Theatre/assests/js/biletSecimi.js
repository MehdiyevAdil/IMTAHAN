const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const link = window.location.hash.slice(1);
let row = document.querySelector('.row');
let row3 = document.querySelector('.row3');
let row4 = document.querySelector('.row4');
let row2 = document.querySelector('.row2');
let ticketPrice = +movieSelect.value;
// Sayfa yüklendiğinde localStorage'den verileri geri al
let basket_arr = [];
window.addEventListener('load', () => {
  const savedBasket = localStorage.getItem('basket');
  if (savedBasket) {
    basket_arr = JSON.parse(savedBasket);

  }
});
// row  started
function operationRow() {
  let rezerf = `http://localhost:3000/fullTamasalar/${link}`;
  fetch(rezerf)
    .then((res) => res.json())
    .then((element) => {
      // console.log(element);
      element.LojaIyarus.forEach(x => {
        const seat = document.createElement('div');
        seat.className = 'seat';

        const seatName = document.createElement('span');
        seatName.className = 'seat-name';
        seatName.innerText = x.name;
        let seatPrice = document.createElement('p');
        seatPrice.innerText = x.price;
        console.log(seatPrice);
        seat.appendChild(seatPrice);
        seat.appendChild(seatName);
        row.appendChild(seat);

      })
      // Koltuk tıklama olayı
      row.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('seat') &&
          !e.target.classList.contains('occupied')
        ) {
          e.target.classList.toggle('selected');
      
          // Koltuğu basket_arr dizisine ekle veya çıkar
          const seatName = e.target.querySelector('.seat-name').innerText;
          const seatIndex = basket_arr.findIndex((x) => x.name === seatName);
      
          if (seatIndex > -1) {
            basket_arr.splice(seatIndex, 1);
          } else {
            const seatPriceElement = e.target.querySelector('p');
            const seatPrice = seatPriceElement.innerText;
            basket_arr.push({ name: seatName, count: 1, price: seatPrice });
          }
      
          // basket_arr'ı localStorage'e kaydet
          localStorage.setItem('basket', JSON.stringify(basket_arr));
        }
      
        updateSelectedCount(); // Koltuk rengini değiştirdikten sonra güncelleme işlemini tekrar yap
      });


    });
  //Update total and count
  // function updateSelectedCount() {
  //   const selectedSeats = document.querySelectorAll('.container .seat.selected');
  //   const selectedSeatsCount = selectedSeats.length;
  //   count.innerText = selectedSeatsCount;
  //   total.innerText = selectedSeatsCount * ticketPrice;
  // }
  //Movie Select Event
  movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
  });
}
operationRow();

// row2 started
function operationRow2() {
  let rezerf = `http://localhost:3000/fullTamasalar/${link}`;
  fetch(rezerf)
    .then((res) => res.json())
    .then((element) => {
      element.AnfiteatrIIyarus.forEach(x => {
        const seat = document.createElement('div');
        seat.className = 'seat';
        const seatName = document.createElement('span');
        seatName.className = 'seat-name';
        seatName.innerText = x.name;
        let seatPrice = document.createElement('p');
        seatPrice.innerText = x.price;
        console.log(seatPrice);
        seat.appendChild(seatPrice);
        seat.appendChild(seatName);
        row2.appendChild(seat);
      });
    });

  // Koltuk tıklama olayı
  // Koltuk tıklama olayı
row2.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    // Koltuğu basket_arr dizisine ekle veya çıkar
    const seatName = e.target.querySelector('.seat-name').innerText;
    const seatIndex = basket_arr.findIndex((x) => x.name === seatName);

    if (seatIndex > -1) {
      basket_arr.splice(seatIndex, 1);
    } else {
      const seatPriceElement = e.target.querySelector('p');
      const seatPrice = seatPriceElement.innerText;
      basket_arr.push({ name: seatName, count: 1, price: seatPrice });
    }

    // basket_arr'ı localStorage'e kaydet
    localStorage.setItem('basket', JSON.stringify(basket_arr));
  }

  updateSelectedCount(); // Koltuk rengini değiştirdikten sonra güncelleme işlemini tekrar yap
});


  //Update total and count
  // function updateSelectedCount() {
  //   const selectedSeats = document.querySelectorAll('.container .seat.selected');
  //   const selectedSeatsCount = selectedSeats.length;
  //   count.innerText = selectedSeatsCount;
  //   total.innerText = selectedSeatsCount * ticketPrice;
  // }

  //Movie Select Event
  movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
  });


}
operationRow2();

// row3 started
function operationRow3() {
  let rezerf = `http://localhost:3000/fullTamasalar/${link}`;
  fetch(rezerf)
    .then((res) => res.json())
    .then((element) => {
      element.MerkeziLoja.forEach(x => {
        const seat = document.createElement('div');
        seat.className = 'seat';

        const seatName = document.createElement('span');
        seatName.className = 'seat-name';
        seatName.innerText = x.name;
        seat.appendChild(seatName);
        row3.appendChild(seat);
        let seatPrice = document.createElement('p');
        seatPrice.innerText = x.price;
        console.log(seatPrice);
        seat.appendChild(seatPrice);
        console.log(seat);
      });
    });
    row3.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
      ) {
        e.target.classList.toggle('selected');
    
        // Koltuğu basket_arr dizisine ekle veya çıkar
        const seatName = e.target.querySelector('.seat-name').innerText;
        const seatIndex = basket_arr.findIndex((x) => x.name === seatName);
    
        if (seatIndex > -1) {
          basket_arr.splice(seatIndex, 1);
        } else {
          const seatPriceElement = e.target.querySelector('p');
          const seatPrice = seatPriceElement.innerText;
          basket_arr.push({ name: seatName, count: 1, price: seatPrice });
        }
    
        // basket_arr'ı localStorage'e kaydet
        localStorage.setItem('basket', JSON.stringify(basket_arr));
      }
    
      updateSelectedCount(); // Koltuk rengini değiştirdikten sonra güncelleme işlemini tekrar yap
    });
    
  //Update total and count
  // function updateSelectedCount() {
  //   const selectedSeats = document.querySelectorAll('.container .seat.selected');
  //   const selectedSeatsCount = selectedSeats.length;
  //   count.innerText = selectedSeatsCount;
  //   total.innerText = selectedSeatsCount * ticketPrice;
  // }

  //Movie Select Event
  movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
  });

}
operationRow3();
// row4 started
function operationRow4() {
  let rezerf4 = `http://localhost:3000/fullTamasalar/${link}`;
  fetch(rezerf4)
    .then((res) => res.json())
    .then((element) => {
      element.Parter.forEach(x => {
        const seat = document.createElement('div');
        seat.className = 'seat';

        const seatName = document.createElement('span');
        seatName.className = 'seat-name';
        seatName.innerText = x.name;
        seat.appendChild(seatName);
         let seatPrice = document.createElement('p');
        seatPrice.innerText = x.price;
        console.log(seatPrice);
        seat.appendChild(seatPrice);
        row4.appendChild(seat);
        console.log(seat);
      });
      row4.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('seat') &&
          !e.target.classList.contains('occupied')
        ) {
          e.target.classList.toggle('selected');
      
          // Koltuğu basket_arr dizisine ekle veya çıkar
          const seatName = e.target.querySelector('.seat-name').innerText;
          const seatIndex = basket_arr.findIndex((x) => x.name === seatName);
      
          if (seatIndex > -1) {
            basket_arr.splice(seatIndex, 1);
          } else {
            const seatPriceElement = e.target.querySelector('p');
            const seatPrice = seatPriceElement.innerText;
            basket_arr.push({ name: seatName, count: 1, price: seatPrice });
          }
      
          // basket_arr'ı localStorage'e kaydet
          localStorage.setItem('basket', JSON.stringify(basket_arr));
        }
      
        updateSelectedCount(); // Koltuk rengini değiştirdikten sonra güncelleme işlemini tekrar yap
      });
      
    });

  //Update total and count
  // function updateSelectedCount() {
  //   const selectedSeats = document.querySelectorAll('.container .seat.selected');
  //   const selectedSeatsCount = selectedSeats.length;
  //   count.innerText = selectedSeatsCount;
  //   total.innerText = selectedSeatsCount * ticketPrice;
  // }

  //Movie Select Event
  movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
  });

}
operationRow4();
// navbar started
function navbar() {
  const icon = document.querySelector('#icon');
  const list = document.querySelector(".list");
  icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');

  })
}
navbar();

// Loja block and none started
movieSelect.addEventListener('change', (e) => {
  console.log(typeof e.target.value);
  ticketPrice = +e.target.value;

  if (e.target.value === '10') {
    row.style.display = 'flex';
    row2.style.display = 'none';
    row3.style.display = 'none';
    row4.style.display = 'none';

  } else if (e.target.value === '12') {
    row2.style.display = 'flex';
    row.style.display = 'none';
    row3.style.display = 'none';
    row4.style.display = 'none';

  } else if (e.target.value === '8') {
    row3.style.display = 'flex';
    row.style.display = 'none';
    row2.style.display = 'none';
    row4.style.display = 'none';

  } else if (e.target.value === '7') {
    row4.style.display = 'flex';
    row.style.display = 'none';
    row2.style.display = 'none';
    row3.style.display = 'none';

  }
});
// localStorage.clear();

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.container .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  let totalPrice = 0;
  selectedSeats.forEach((seat) => {
    const seatPriceElement = seat.querySelector('p');
    const seatPrice = parseFloat(seatPriceElement.innerText);
    totalPrice += seatPrice;
  });

  count.innerText = selectedSeatsCount;
  total.innerText = totalPrice;
}
