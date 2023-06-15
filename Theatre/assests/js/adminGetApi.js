function fullTamasalar() {
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
          details.href = 'adminUpdateDelete.html#' + element.id;
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
}

fullTamasalar();
function bediHeyyet() {
  const bediHeyyetCard = document.querySelector('#bediHeyyetCard');
  const bediHeyyetContent = document.querySelector('.bediHeyyetContent');
  let bediHeyyetUrl = 'http://localhost:3000/bediHeyet';
  let loadedBediHeyyetCards = 0; // Counter for tracking the number of cards loaded

  function getBediHeyyetApi() {
    fetch(bediHeyyetUrl)
      .then(res => res.json())
      .then((data) => {
        const batch = data.slice(loadedBediHeyyetCards, loadedBediHeyyetCards + 4); // Get the next 4 cards

        batch.forEach(element => {
          const cardContent = document.createElement('div');
          cardContent.className = 'sizeClass';
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
          details.href = 'adminUpdateDelete.html#' + element.id;
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
  bediHeyyetCard.appendChild(loadMoreBtn);
  loadMoreBtn.id = 'loadMoreBtn';
  loadMoreBtn.innerText = 'Load More';
  loadMoreBtn.addEventListener('click', loadMore);

  // Add the button to the document
  bediHeyyetContent.appendChild(loadMoreBtn);
}

bediHeyyet();
