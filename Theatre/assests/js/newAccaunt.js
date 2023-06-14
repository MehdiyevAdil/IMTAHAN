
// ------------------------------------------------------
let formContent=document.querySelector('.formContent');
let user=document.querySelector('#userName');
let userName=document.querySelector('#userSurname');
let userMail=document.querySelector('#userMail');
let userParol=document.querySelector('#userParol');
let create=document.querySelector('#create');
// form-da gelen deyerler  data objectine menimsedilir
formContent.addEventListener('submit',function(e){
e.preventDefault();
let data={
    newUserName: document.getElementById('userName').value,
    newUserSurname: document.getElementById('userSurname').value,
    newUserMail: document.getElementById('userMail').value,
    newUserparol: document.getElementById('userParol').value,

};
console.log(data);
fetch('http://localhost:3000/users', {
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
