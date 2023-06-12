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
