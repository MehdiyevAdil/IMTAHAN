// fullTamasalar
function fullTamasaUtdDel(){
    const detalis = document.querySelector('.detalis');
const link = window.location.hash.slice(1);
const apiDetalisUrl = `http://localhost:3000/fullTamasalar/${link}`;

console.log(link);

fetch(apiDetalisUrl)
  .then((res) => res.json())
  .then((data) => {
    detalis.innerHTML = `
      <p>ID: ${data.id}</p>
      <input class="dates" type="text" placeholder="date" value="${data.date}">
      <input class="performance" type="text" placeholder="performance" value="${data.tamasa}">
      <input class="composer" type="text" placeholder="composer" value="${data.bəstəkar}">
      <input class="janr" type="text" placeholder="janr" value="${data.janr}">
      <input class="slide" type="text" placeholder="slide" value="${data.slide}">
      <input class="img" type="text" placeholder="img" value="${data.img}">
      <input class="info" type="text" placeholder="info" value="${data.info}">
      <button class="updateBtn">Update</button>
      <button class="deleteBtn">Delete</button>
    `;

    const date = document.querySelector('.dates');
    const performance = document.querySelector(".performance");
    const composer = document.querySelector(".composer");
    const janr = document.querySelector(".janr");
    const slide = document.querySelector(".slide");
    const img = document.querySelector(".img");
    const info = document.querySelector(".info");
    const updateBtn = document.querySelector(".updateBtn");
    const deleteBtn = document.querySelector(".deleteBtn");

    updateBtn.addEventListener("click", function () {
      let requestBody = {
        date: date.value,
        tamasa: performance.value,
        bəstəkar: composer.value,
        janr: janr.value,
        slide: slide.value,
        img: img.value,
        info: info.value
      };

      fetch(`http://localhost:3000/fullTamasalar/${data.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    });

    deleteBtn.addEventListener("click", function () {
      fetch(`http://localhost:3000/fullTamasalar/${data.id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // Silme işleminden sonra gerektiğinde başka bir sayfaya yönlendirme yapabilirsiniz
          window.location.href = "adminUpdateDelete.html";
        });
    });
  });
}
fullTamasaUtdDel()
// bədii heyyət

function bediHeyyetUptDel(){
    const detalisSquads = document.querySelector('.detalis');
const linkSquads = window.location.hash.slice(1);
const apiDetalisSquads = `http://localhost:3000/bediHeyet/${linkSquads}`;
console.log(linkSquads);
fetch(apiDetalisSquads)
  .then((res) => res.json())
  .then((data) => {
    detalisSquads.innerHTML = `
      <p>ID: ${data.id}</p>
      <input class="name" type="text" placeholder="date" value="${data.name}">
      <input class="lar" type="text" placeholder="performance" value="${data.lar}">
      <input class="img" type="text" placeholder="img" value="${data.img}">
      <input class="info" type="text" placeholder="info" value="${data.info}">
      <button class="updateBtn">Update</button>
      <button class="deleteBtn">Delete</button>
    `;

    const name = document.querySelector('.name');
    const lar = document.querySelector(".lar");
    const img = document.querySelector(".img");
    const info = document.querySelector(".info");
    const updateBtn = document.querySelector(".updateBtn");
    const deleteBtn = document.querySelector(".deleteBtn");

    updateBtn.addEventListener("click", function () {
      let requestBody = {
        name: name.value,
        lar: lar.value,
        info: info.value,
        img: janr.value,
      };

      fetch(`http://localhost:3000/bediHeyet/${data.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    });

    deleteBtn.addEventListener("click", function () {
      fetch(`http://localhost:3000/bediHeyet/${data.id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // Silme işleminden sonra gerektiğinde başka bir sayfaya yönlendirme yapabilirsiniz
          window.location.href = "adminUpdateDelete.html";
        });
    });
  });
}
bediHeyyetUptDel()
