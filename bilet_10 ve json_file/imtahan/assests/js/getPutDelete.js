const detalis = document.querySelector('.detalis');
const link = window.location.hash.slice(1);
const apiDetalisUrl = `http://localhost:3000/posts/${link}`;

console.log(link);

fetch(apiDetalisUrl)
    .then((res) => res.json())
    .then((data) => {
        detalis.innerHTML = `
      <p>ID: ${data.id}</p>
      <input class="contactTitle" type="text" placeholder="Contact Title" value="${data.contactTitle}" >
      <input class="contactName" type="text" placeholder="Contact Name" value="${data.contactName}" >  
      <input class="companyName" type="text" placeholder="Company Name" value="${data.companyName}" >  
      <input class="street" type="text" placeholder="Street" value="${data.address.street}" >  
      <input class="city" type="text" placeholder="City" value="${data.address.city}" >   
      <input class="region" type="text" placeholder="Region" value="${data.address.region}" >   
      <input class="postalCode" type="text" placeholder="Postal Code" value="${data.address.postalCode}" >      
      <input class="country" type="text" placeholder="Country" value="${data.address.country}" >      
      <input class="phone" type="text" placeholder="Phone" value="${data.address.phone}" >  
      <button class="updateBtn">Update</button>
      <button class="deleteBtn">Delete</button>
    `;

        const contactTitle = document.querySelector(".contactTitle");
        const contactName = document.querySelector(".contactName");
        const companyName = document.querySelector(".companyName");
        const street = document.querySelector(".street");
        const city = document.querySelector(".city");
        const region = document.querySelector(".region");
        const postalCode = document.querySelector(".postalCode");
        const country = document.querySelector(".country");
        const phone = document.querySelector(".phone");
        const updateBtn = document.querySelector(".updateBtn");

        const deleteBtn = document.querySelector(".deleteBtn"); // Move deleteBtn declaration here

        updateBtn.addEventListener("click", function () {
            let requestBody = {
                companyName: companyName.value,
                contactName: contactName.value,
                contactTitle: contactTitle.value,
                address: {
                    street: street.value,
                    city: city.value,
                    region: region.value,
                    postalCode: postalCode.value,
                    country: country.value,
                    phone: phone.value
                }
            };

            fetch(`http://localhost:3000/posts/${data.id}`, {
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
            fetch(`http://localhost:3000/posts/${data.id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // Redirect to a different page after deleting if needed
                    window.location.href = "index.html";
                });
        });
    });
