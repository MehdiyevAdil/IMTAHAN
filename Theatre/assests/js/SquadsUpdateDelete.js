
// bədii heyyət


const detalisSquads = document.querySelector('.detalis');
const linkSquads = window.location.hash.slice(1);
const apiDetalisSquads = `http://localhost:3000/bediHeyet/${linkSquads}`;
console.log(linkSquads);
fetch(apiDetalisSquads)
  .then((res) => res.json())
  .then((dataw) => {
    detalisSquads.innerHTML = `
      <p>ID: ${dataw.id}</p>
      <input class="name" type="text" placeholder="date" value="${dataw.name}">
      <input class="lar" type="text" placeholder="performance" value="${dataw.lar}">
      <input class="img" type="text" placeholder="img" value="${dataw.img}">
      <input class="info" type="text" placeholder="info" value="${dataw.info}">
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
        img: img.value,
      };

      fetch(`http://localhost:3000/bediHeyet/${dataw.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(res => res.json())
        .then(dataw => {
          console.log(dataw);
        });
    });

    deleteBtn.addEventListener("click", function () {
      fetch(`http://localhost:3000/bediHeyet/${dataw.id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // Silme işleminden sonra gerektiğinde başka bir sayfaya yönlendirme yapabilirsiniz
          window.location.href = "admin.html";
        });
    });
  });

// bediHeyyetUptDel()
