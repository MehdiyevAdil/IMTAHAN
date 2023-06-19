
        const detalis = document.querySelector('.detalisFull');
        const link = window.location.hash.slice(1);
        const apiDetalisUrl = `http://localhost:3000/fullTamasalar/${link}`;
      
        console.log(link);
      
        fetch(apiDetalisUrl)
          .then((res) => res.json())
          .then((data) => {
            detalis.innerHTML = `
          <p>ID:salam ${data.id}</p>
          <input class="dates" type="text" placeholder="date" value="${data.date}">
          <input class="performance" type="text" placeholder="tamasa" value="${data.tamasa}">
          <input class="composer" type="text" placeholder="composer" value="${data.bestekar}">
          <input class="janr" type="text" placeholder="janr" value="${data.janr}">
          <input class="slide" type="text" placeholder="slide" value="${data.slide}">
          <input class="img" type="text" placeholder="img" value="${data.img}">
          <input class="info" type="text" placeholder="info" value="${data.info}">
          <button class="updateBtn">Update</button>
          <button class="deleteBtn">Delete</button>
        `;
            const date = document.querySelector('.dates');
            const tamasa = document.querySelector(".performance");
            const bestekar = document.querySelector(".composer");
            const janr = document.querySelector(".janr");
            const slide = document.querySelector(".slide");
            const img = document.querySelector(".img");
            const info = document.querySelector(".info");
            const updateBtn = document.querySelector(".updateBtn");
            const deleteBtn = document.querySelector(".deleteBtn");
      console.log(data);
            updateBtn.addEventListener("click", function () {
              let requestBody2 = {
                date: date.value,
                tamasa: tamasa.value,
                bestekar: bestekar.value,
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
                body: JSON.stringify(requestBody2)
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
                  window.location.href = "fulltamasaUpdateDelete.html";
                });
            });
          });
      