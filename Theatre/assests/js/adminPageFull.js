// function performance POST started
const postForms = document.querySelector(".postForms");
postForms.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = {

    dates: document.getElementById('dates').value,
    performance: document.getElementById('performance').value,
    composer: document.getElementById('composer').value,
    janr: document.getElementById('janr').value,
    img: document.getElementById('img').value,
    info: document.getElementById('info').value,
  };
  console.log((data))
  fetch('http://localhost:3000/fullTamasalar', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
})
const card = document.querySelector('#card');
const mainContent = document.querySelector('.mainContent');
let url = 'http://localhost:3000/fullTamasalar';
let loadedCards = 0; // Counter for tracking the number of cards loaded

function getFullTamasalarApi() {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      const batch = data.slice(loadedCards, loadedCards + 4); // Get the next 4 cards

      batch.forEach(element => {
        const cardContent = document.createElement('div');
        cardContent.className = 'sizeClass';
        card.appendChild(cardContent);

        const ID = element.id;
        const p = document.createElement('p');
        p.innerText = ID;
        const tamasaApi = element.tamasa;
        const tamasa = document.createElement('p');
        tamasa.innerText = tamasaApi;
        cardContent.appendChild(p);
        cardContent.appendChild(tamasa);

        const details = document.createElement('a');
        cardContent.appendChild(details);
        details.innerText = 'DETAILS';
        details.target = '_blank';
        details.href = 'fulltamasaUpdateDelete.html#' + element.id;
      });

      loadedCards += batch.length; // Increment the counter by the number of loaded cards

      if (loadedCards >= data.length) {
        // Hide the "Load More" button if all cards have been loaded
        loadMoreBtn.style.display = 'none';
      }
    });
}

function loadMore() {
  getFullTamasalarApi();
}

// Create the "Load More" button dynamically
const loadMoreBtn = document.createElement('button');
card.appendChild(loadMoreBtn);
loadMoreBtn.id = 'loadMoreBtn';
loadMoreBtn.innerText = 'Load More';
loadMoreBtn.addEventListener('click', loadMore);

// Add the button to the document
mainContent.appendChild(loadMoreBtn);

