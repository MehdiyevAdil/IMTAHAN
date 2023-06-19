const basket_content = document.getElementById("basket_content");
const h2 = document.querySelector("h2");
let basket_arr = [];

basket_arr = JSON.parse(localStorage.getItem("basket"));//basket nedir
getTotal();
basket_arr.forEach((element) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const del = document.createElement("i");

  h3.innerHTML = element.name;
  p.innerHTML = element.count;
  del.className="fa-solid fa-trash";
  del.onclick = () => {
    basket_arr = basket_arr.filter((x) => x.name !== element.name);
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
    div.remove();
  };

  div.classList.add("basket_item");

  div.append(h3, p, del);
  basket_content.append(div);
});

function getTotal() {
  const total = basket_arr.reduce(
    (sum, prev) => sum + prev.price * prev.count,
    0
  );
  h2.innerHTML = total;
}
//// navbar js
const icon = document.querySelector('#icon');
const list = document.querySelector(".list");
icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');

})
