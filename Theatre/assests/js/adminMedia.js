const postFormsSquads = document.querySelector(".postFormsMedia");
console.log(postFormsSquads);
postFormsSquads.addEventListener("submit", function (e) {
    e.preventDefault();
    let dataTwo = {
        name: document.getElementById('name').value,
        info: document.getElementById('info').value,
        img:document.getElementById('img').value,
    };
    console.log((dataTwo))
    fetch('http://localhost:3000/news', {
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

const card = document.querySelector('#card');
const mainContent = document.querySelector('.mainContent');
let url = 'http://localhost:3000/news';
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
        const nameMedia = element.name;
        const name = document.createElement('p');
        name.innerText = nameMedia;
        cardContent.appendChild(p);
        cardContent.appendChild(name);

        const details = document.createElement('a');
        cardContent.appendChild(details);
        details.innerText = 'DETAILS';
        details.target = '_blank';
        details.href = 'fullMedia.html#' + element.id;
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
