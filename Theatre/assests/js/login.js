let idMail = document.querySelector('#idMail');
let idPassword = document.querySelector('#idPassword');
let formContent = document.querySelector('.formContent');
let btnEnter = document.querySelector('#btnEnter');

btnEnter.addEventListener('click', function(e) {
  e.preventDefault(); 

  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
      const newUserMail = idMail.value;
      const newUserparol = idPassword.value;
      let isAdmin = false;

      data.forEach(element => {
        if (newUserMail === "admin@admin.com" && newUserparol === "admin") {
          isAdmin = true;
        } else if (newUserMail === element.newUserMail && newUserparol === element.newUserparol) {
          window.location.assign("home.html");
        }
      });

      if (isAdmin) {
        window.location.assign("admin.html");
      } else {
        // alert('Kullanıcı adı veya parola yanlış');
      }
    })
    .catch(error => {
      console.error('ERROR:', error);
    });
});
