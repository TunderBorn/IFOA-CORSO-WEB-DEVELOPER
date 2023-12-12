const url = "https://striveschool-api.herokuapp.com/api/product/";

const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjgzN2MwNTgzNTAwMTg1MjJkMDciLCJpYXQiOjE3MDIzNzM0MzIsImV4cCI6MTcwMzU4MzAzMn0.jQ_QpwdN8o3YSgrCTdQ4GgznCmmZhf31zC7qlmU9FW8";
const headers = {
  Authorization: key,
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch(url, {
  headers: headers,
}).then((response) =>
  response.json().then((data) => {
    products = data;
    createCards(data);
  })
);

/* FUNZIONI PAGINA HOMEPAGE */
function createCards(data) {
  data.forEach((data) => {
    let col = document.createElement("div");
    col.classList.add("col");
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("card-img-top", "object-fit-cover");
    img.src = data.imageUrl;
    img.style.height = "15rem";
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = data.name;
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = data.brand;
    let row = document.getElementById("prodotti");

    /*buttons*/
    let viewBtn = document.createElement("button");
    viewBtn.classList.add("btn", "btn-outline-secondary"); // data-bs-toggle="modal"
    viewBtn.innerText = "Scopri";
    viewBtn.addEventListener("click", function () {
      window.location.href = "./Dettagli.html";
    });

    let editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-outline-secondary"); // data-bs-toggle="modal"
    editBtn.innerText = "Modifica";
    editBtn.addEventListener("click", function () {
      window.location.href = "./Modifica.html";
    });

    /*APPEND CHILD*/
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(viewBtn);
    cardBody.appendChild(editBtn);
    card.appendChild(img);
    card.appendChild(cardBody);
    row.appendChild(card);
  });
}

/* FUNZIONI PAGINA BACK OFFICE*/
const BtnReset = document.getElementById("BtnReset");
const BtnNew = document.getElementById("BtnNew");
const productNew = [];

  const Nome = document.getElementById("nome").value;
  const Brand = document.getElementById("brand").value;
  const Prezzo = document.getElementById("prezzo").value;
  const urlImmagine = document.getElementById("urlImmagine").value;
  const Descrizione = document.getElementById("descrizione").value;


function newCards() {
  

  post();
}
newCards(Nome, Descrizione, Brand, urlImmagine, Prezzo);

function post(Nome, Descrizione, Brand, urlImmagine, Prezzo) {
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: key,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      'name': Nome,
      'description': Descrizione,
      'brand': Brand,
      'imageUrl': urlImmagine,
      'price': Prezzo,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      newCards(data);
    });
}

function reset() {
  Nome = '';
  Descrizione = '';
  Brand = '';
  urlImmagine = '';
  Prezzo = '';
}


/* FUNZIONI PAGINA DETTAGLI */

function DettagliCards(data) {
  data.forEach((data) => {
    let col = document.createElement("div");
    col.classList.add("col");
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("card-img-top", "object-fit-cover");
    img.src = data.imageUrl;
    img.style.height = "40rem";
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = data.name;
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = data.brand;
    let row = document.getElementById("dettaglio");

    /*APPEND CHILD*/
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);
    row.appendChild(card);
  });
}
