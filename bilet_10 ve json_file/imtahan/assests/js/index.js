const icon = document.querySelector('#icon');
const list = document.querySelector(".list");

icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');

})
// card get process
const card = document.querySelector('#card');
const mainContent=document.querySelector('.mainContent');
let url = 'http://localhost:3000/posts';
let loadedCards = 4; 

function getApi() {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      const batch = data.slice(loadedCards, loadedCards + 4); // Get the next 4 cards
      
      batch.forEach(element => {
        const cardContent = document.createElement('div');
        cardContent.className = 'sizeClass';
        card.append(cardContent);
        
        const ID = element.id;
        const p = document.createElement('p');
        p.append(ID)
        cardContent.append(p);
        
        const details = document.createElement('a');
        cardContent.append(details);
        details.innerText = 'VIEW DETAILS';
        details.target = '_blank';
        details.href = 'getPutDelete.html#' + element.id;
      });

      loadedCards += batch.length; // Increment the counter by the number of loaded cards

      if (loadedCards >= data.length) {
        // Hide the "Load More" button if all cards have been loaded
      }
    })
}

function loadMore() {
  getApi();
}

const loadMoreBtn = document.createElement('button');
card.append(loadMoreBtn)
loadMoreBtn.id = 'loadMoreBtn';
loadMoreBtn.innerText = 'Load More';
loadMoreBtn.addEventListener('click', loadMore);

mainContent.appendChild(loadMoreBtn);
