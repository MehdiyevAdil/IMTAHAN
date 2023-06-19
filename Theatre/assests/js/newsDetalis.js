// detalis fetch
const detalis = document.querySelector('.detalis');
const newsDetalisInfo=document.querySelector('.newsDetalisInfo');
const link = window.location.hash.slice(1);
const apiDetalisUrl=`http://localhost:3000/news/${link}`;
fetch(apiDetalisUrl)
    .then((res) => res.json())
    .then((data) => {
        let newsImg = document.createElement('div');
        detalis.append(newsImg)
        newsImg.className = 'newsImgSize';
        detalis.className = 'newsSize';
        newsImg.style.backgroundImage = `url(${data.img})`;
        console.log(detalis);

        let name = document.createElement('h2');
        let nameApi = data.name;
        name.append(nameApi);
        newsDetalisInfo.append(name);
        let infoApi=data.info;
        newsDetalisInfo.append(infoApi);
    })

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
