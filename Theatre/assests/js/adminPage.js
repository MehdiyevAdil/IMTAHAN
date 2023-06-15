// function performance POST started
function postPerformance(){
    const postForms = document.querySelector(".postForms");
postForms.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        dates: document.getElementById('dates').value,
        performance: document.getElementById('performance').value,
        composer: document.getElementById('composer').value,
        janr:document.getElementById('janr').value,
        img: document.getElementById('img').value,
        info: document.getElementById('info').value,
    };
    console.log((data))
    fetch('http://localhost:3000/fullTamasalar', {
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
}
postPerformance();
// function performance POST end
let test=document.querySelector('.test')
console.log(test);

// function squads POST started

    const postFormsSquads = document.querySelector(".postFormsSquads");
    console.log(postFormsSquads);
    postFormsSquads.addEventListener("submit", function (e) {
        e.preventDefault();
        let dataTwo = {
            name: document.getElementById('name').value,
            lar: document.getElementById('lar').value,
            info: document.getElementById('info').value,
            img:document.getElementById('img').value,
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


// function squads POST end

