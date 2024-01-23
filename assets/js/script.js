let cards = document.querySelector(".my-cards");

const BASE_URL = `http://localhost:3000`;
myData = [];
async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  myData = response.data;
  console.log(response.data);
  drawProducts(response.data);
}
getData("products");

function drawProducts(data) {
  cards.innerHtml = "";
  data.forEach((element) => {
    cards.innerHtml += `<div class="my-card">
    <div class="card-img">
      <img src="${element.img}" alt="" />
    </div>
    <div class="card-text">
      <a href="#">${element.title}</a>
      <span>${element.newPrice}</span>
    </div>
  </div>`;
  });
}
