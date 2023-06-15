
let idMail = document.querySelector('#idMail');
let idPassword = document.querySelector('#idPassword');
let formContent = document.querySelector('.formContent');
let btnEnter = document.querySelector('#btnEnter');

btnEnter.addEventListener('click', function(e) {
  e.preventDefault(); 
//   Json fayillarinin deyisene menimsedilmesi
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
      // JSON dan gelen datalari deyisene menimsedirik
      const newUserMail = idMail.value;
      const newUserparol = idPassword.value;
data.forEach(element => {
if(newUserMail==element.newUserMail && newUserparol==element.newUserparol){
    window.location.assign("home.html")//home.html sehifesine yonlendirme
}else{
 alert('istifadeci adi ve ya parolu yalnisdir');
}
});
    })
    .catch(error => {
      console.error('ERROR:', error);
    });
});

