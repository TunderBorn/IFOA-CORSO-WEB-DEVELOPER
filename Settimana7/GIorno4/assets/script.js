const url = "https://api.pexels.com/v1/search?query=";
const key = "BwgKidydRoJbx7VJ51GKTmXIzmX2lMHHsL8x61GjBv4jiedN3obikm5V";
const headers = {
  Authorization: key,
  Accept: "application/json",
  "Content-Type": "application/json",
};

fetch(url + 'cats', {
  headers: headers,
}).then((response) => response.json().then((data) => loadPage(data.photos)));

/*caricamento img e card */

function loadPage(photos) {
  photos.forEach((photo) => {
    let col = document.createElement("div");
    col.classList.add("col-md-4");
    let card = document.createElement("div");
    card.classList.add("card", "m-2", 'shadow-lg');
    let img = document.createElement("img");
    img.classList.add("card-img-top", "object-fit-cover");
    img.src = photo.src.medium;
    img.style.height = "15rem";
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");


    /*buttons */
    let viewBtn = document.createElement('button');
    viewBtn.classList.add('btn', 'btn-outline-secondary'); // data-bs-toggle="modal"
    viewBtn.innerText = 'VIEW';

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-outline-secondary', 'mx-1');
    deleteBtn.innerText = 'X';

    let row = document.getElementById("row");


    cardTitle.innerText = photo.photographer;
    cardText.innertext = "lorem ipsum gen gne";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(viewBtn);
    cardBody.appendChild(deleteBtn);
    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);

    

    deleteBtn.addEventListener('click', function() {
        document.querySelector('#row').removeChild(col);
    });

    viewBtn.addEventListener('click', function() {
     

//modale

    })



  });
}


/*bottoni 

const btnLoad1 = document.getElementById('load1');



btnLoad1.addEventListener('click', function () {

    fetch(url + 'paintings', {
        headers: headers,
      }).then((response) => response.json().then((data) => loadPage(data.photos)));

      
    loadPage(photos);



})

*/