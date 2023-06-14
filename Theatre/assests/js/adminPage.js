// function performance POST started
// function postPerformance(){
//     const postForms = document.querySelector(".postForms");
// postForms.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let data = {
//         datesData: document.getElementById('dates').value,
//         performanceData: document.getElementById('performance').value,
//         composerData: document.getElementById('composer').value,
//         janrData:document.getElementById('janr').value,
//         imgData: document.getElementById('img').value,
//         infoData: document.getElementById('info').value,
//     };
//     console.log((data))
//     fetch('http://localhost:3000/fullTamasalar', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
// })
// }
// postPerformance();
// function performance POST end
let test=document.querySelector('.test')
console.log(test);
const postFormsSquads = document.getElementById("postFormsSquads");
console.log(postFormsSquads);
// function squads POST started
function postSquads(){
    const postFormsSquads = document.querySelector(".postFormsSquads");
    console.log(postFormsSquads);
    postFormsSquads.addEventListener("submit", function (e) {
        e.preventDefault();
        let dataTwo = {
            nameData: document.getElementById('name').value,
            larData: document.getElementById('lar').value,
            infoData: document.getElementById('info').value,
            imgData:document.getElementById('img').value,
        };
        console.log((dataTwo))
        fetch('http://localhost:3000/bediHeyet', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataTwo)
        })
            .then(res => res.json())
            .then(dataTwo => {
                console.log(dataTwo);
            })
    })
}
postSquads()
// function squads POST end

