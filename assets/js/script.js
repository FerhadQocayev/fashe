let cards = document.querySelector(".my-cards");
let header = document.querySelector("#header-top");
let headerMain = document.querySelector(".header-bottom");
const BASE_URL = `http://localhost:3000`;
myData = [];
async function getData(endpoint) {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  myData = response.data;
  console.log(response.data);
  drawProducts(response.data);
}
getData("products");

function drawProducts(data) {
  cards.innerHTML = "";

  data.forEach((element) => {
    cards.innerHTML += `
    <div class="my-card">
        <div class="card-img">
        <img src="${element.img}" alt="" />
        </div>
        <div class="card-text">
        <a href="#">${element.title}</a>
        <span>$${element.newPrice}</span>
        </div>
    </div>`;
  });
}
window.addEventListener("scroll", function () {
  header.style.display = "none";
});
