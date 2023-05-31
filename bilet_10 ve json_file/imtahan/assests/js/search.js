// lazimi elementlerin elani
const inp = document.querySelector('#inputSearch');
const keyList = document.querySelector('.keyList');
const btn=document.querySelector('.btn');
let clicked = false;
// funcsiyanin daxilinde fetc prosesini edirik



function fetchData() {
    keyList.innerHTML=""
  fetch('http://localhost:3000/posts')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
      console.log(element.contactName.toUpperCase().includes("a"))
        if(element.contactName.toUpperCase().includes(inp.value.toUpperCase())){
           
            console.log(element);
            let p=document.createElement('p');
            let names=element.contactName;
            p.innerText =names
            // console.log(element)
            keyList.append(p);
          }
      });
      
    })
    
    }
  
//API den gelen melumatlarin inputa click zamani gorunmesi
inp.addEventListener('click', function() {
  if (!clicked) {
    clicked = true;
    fetchData();
  } else {
    keyList.innerHTML = ''; // yeniden 0-lanir
    clicked = false;
  }
});
inp.addEventListener('keyup', fetchData);