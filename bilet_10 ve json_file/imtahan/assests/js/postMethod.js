const postForms = document.querySelector(".postForms");
postForms.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        companyName: document.getElementById('TASKname').value,
        contactName: document.getElementById('TASKcompany').value,
        contactTitle: document.getElementById('TASKcontact').value,
        address: {
            street: document.getElementById('TASKstreet').value,
            city: document.getElementById('TASKcity').value,
            region: document.getElementById('TASKregion').value,
            postalCode: document.getElementById('TASKcode').value,
            country: document.getElementById('TASKcountry').value,
            phone: document.getElementById('TASKphone').value,
        }
    };
    console.log((data))
    fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
})