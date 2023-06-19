const postFormsSquads = document.querySelector(".postFormsSquads");
console.log(postFormsSquads);
postFormsSquads.addEventListener("submit", function (e) {
    e.preventDefault();
    let dataTwo = {
        name: document.getElementById('name').value,
        lar: document.getElementById('lar').value,
        info: document.getElementById('info').value,
        img:document.getElementById('img').value,
    };
    console.log((dataTwo))
    fetch('http://localhost:3000/bediHeyet', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataTwo)
    })
        .then(res => res.json())
        .then(dataTwo => {
            console.log(dataTwo);
        })
})

const bediHeyyetCard = document.querySelector('#bediHeyyetCard');
const bediHeyyetContent = document.querySelector('.bediHeyyetContent');
const bediHeyyetGet = document.querySelector('.bediHeyyetGet');

let bediHeyyetUrl = 'http://localhost:3000/bediHeyet';
let loadedBediHeyyetCards = 0; // Counter for tracking the number of cards loaded

function getBediHeyyetApi() {
  fetch(bediHeyyetUrl)
    .then(res => res.json())
    .then((data) => {
      const batch = data.slice(loadedBediHeyyetCards, loadedBediHeyyetCards + 4); // Get the next 4 cards

      batch.forEach(element => {
        const cardContent = document.createElement('div');
        cardContent.className = 'sizeClassSquads';
        bediHeyyetCard.appendChild(cardContent);

        const ID = element.id;
        const p = document.createElement('p');
        p.innerText = ID;
        const nameApi = element.name;
        const name = document.createElement('p');
        name.innerText = nameApi;
        cardContent.appendChild(p);
        cardContent.appendChild(name);

        const details = document.createElement('a');
        cardContent.appendChild(details);
        details.innerText = 'DETAILS';
        details.target = '_blank';
        details.href = 'SquadsUpdateDelete.html#' + element.id;
      });

      loadedBediHeyyetCards += batch.length; // Increment the counter by the number of loaded cards

      if (loadedBediHeyyetCards >= data.length) {
        // Hide the "Load More" button if all cards have been loaded
        loadMoreBtn.style.display = 'none';
      }
    });
}

function loadMore() {
  getBediHeyyetApi();
}

// Create the "Load More" button dynamically
const loadMoreBtn = document.createElement('button');
bediHeyyetGet.appendChild(loadMoreBtn);
loadMoreBtn.id = 'loadMoreBtn';
loadMoreBtn.innerText = 'Ətraflı';
loadMoreBtn.addEventListener('click', loadMore);

// Add the button to the document
// bediHeyyetContent.appendChild(loadMoreBtn);
