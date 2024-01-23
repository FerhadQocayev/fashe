let tbody = document.querySelector(".tbody");
let idClick = document.querySelector(".id");
let nameClick = document.querySelector(".name");
let search = document.querySelector(".search");

const BASE_URL = `http://localhost:3000`;
myData = [];
async function getData(endpoint) {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  myData = response.data;
  console.log(response.data);
  drawTable(response.data);
}
getData("products");

function drawTable(data) {
  tbody.innerHTML = " ";
  data.forEach((element) => {
    let trElemnt = document.createElement("tr");

    trElemnt.innerHTML = `
                      <td>${element.id}</td> 
                     <td>${element.title} </td> 
                     <td>$ ${element.newPrice} </td> 
                     <td><button class="btn delete" onclick=deleteBlog(${element.id},this)>Delete</button>   <a class="edit" href="new-blog.html?id=${element.id}">Edit</a> </td> 

                   `;

    tbody.append(trElemnt);
  });
}

let sortId = "asc";
let sortName = "asc";

idClick.addEventListener("click", () => {
  idClick.classList.toggle("asc");

  if (sortId === "asc") {
    sortId = "desc";

    let sortedName = myData.sort((a, b) => b.id - a.id);

    drawTable(sortedName);
  } else {
    sortId = "asc";
    let sortedName = myData.sort((a, b) => a.id - b.id);

    drawTable(sortedName);
  }
});

nameClick.addEventListener("click", () => {
  if (sortName === "asc") {
    sortName = "desc";
    let sortedName = myData.sort((a, b) =>
      b.first_name.localeCompare(a.first_name)
    );

    drawTable(sortedName);
  } else {
    sortName = "asc";
    let sortedName = myData.sort((a, b) =>
      a.first_name.localeCompare(b.first_name)
    );
    drawTable(sortedName);
  }
});

async function deleteBlog(id, btn) {
  if (confirm("Are you sure to delete this blog??")) {
    btn.parentElement.parentElement.remove();
    await axios.delete(`${BASE_URL}/products/${id}`);
  }
}
