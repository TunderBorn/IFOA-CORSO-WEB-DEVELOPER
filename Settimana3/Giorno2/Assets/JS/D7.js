/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro*/

const changeTitle = function (newTitle) {
  const titleElement = document.querySelector("h1");
  if (titleElement) {
    titleElement.textContent = newTitle;
  }
};

changeTitle("Nuovo Titolo della Pagina come richiesto");

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"*/

const addClassToTitle = function () {
  document.querySelector("h1").classList.add("myHeading");
};

addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div*/

const changePcontent = function () {
  const paragrafi = document.querySelectorAll("div p");
  paragrafi.forEach((p) => {
    Element.innerText = "Testo cambiato";
  });
};

changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.*/

const changeUrls = function () {
  const links = document.querySelectorAll("a:not(footer a)");

  links.forEach((element) => {
    element.setAttribute("href", "https://www.google.it/");
  });
};
changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const secondaLista = document.getElementById("secondList");
  const nuovoItem = document.createElement("li");
  secondaLista.innerText = "New Item";
  secondaLista.appendChild(nuovoItem);
};
addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const primoDiv = document.querySelector("div");
  let paragrafo = document.createElement("p");
  paragrafo.innerText = "new P";
  primoDiv.appendChild(paragrafo);
};
addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  document.getElementById("firstList").style.display = "none";
};
hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const liste = document.querySelectorAll("ul");
  liste.forEach((element) => {
    element.classList.add("sfondoVerde");
  });
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const titolo = document.querySelector("h1");
  titolo.onclick = function () {
    titolo.innerText = titolo.innerText.slice(0, -1);
  };
};
makeItClickable();




/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
    const footer = document.querySelector('footer');
    footer.onclick = function () {
        const link = document.querySelector('footer a');
        alert(link.getAttribute('href'));
    }
};
revealFooterLink();




/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
const prodotti = [
    {
        id: 1,
        immagine: 'immagine1',
        nomeProd: 'prodotto 1',
        quantita: 25,
        prezzo: 57
    },
    {
        id: 2,
        immagine: 'immagine2',
        nomeProd: 'prodotto 2',
        quantita: 32,
        prezzo: 12
    },
    {
        id: 3,
        immagine: 'immagine3',
        nomeProd: 'prodotto 3',
        quantita: 65,
        prezzo: 89
    },
    {
        id: 4,
        immagine: 'immagine4',
        nomeProd: 'prodotto 4',
        quantita: 90,
        prezzo: 320
    },
]
    const contenitore = document.getElementById('tableArea');
    const tabella = document.createElement('table');
    tabella.classList.add('tabella');

    const primaRiga = document.createElement('tr');
    
    const intImmagine = document.createElement('td');
    intImmagine.innerText = 'Immagine';
    const intNome = document.createElement('td');
    intNome.innerText = 'Nome Prodotto';
    const intQty = document.createElement('td');
    intQty.innerText = 'Quantità';
    const intPrezzo = document.createElement('td');
    intPrezzo.innerText = 'Prezzo';

    primaRiga.appendChild(intImmagine);
    primaRiga.appendChild(intNome);
    primaRiga.appendChild(intQty);
    primaRiga.appendChild(intPrezzo);
    tabella.appendChild(primaRiga);

    for(let i = 0; i < prodotti.length; i++) {
        const nuovaRiga = document.createElement('tr');

        const cellaImmagine = document.createElement('td');
        cellaImmagine.innerText = ${prodotti[i].immagine};
        const cellaNome = document.createElement('td');
        cellaNome.innerText = ${prodotti[i].nomeProd};
        const cellaQty = document.createElement('td');
        cellaQty.innerText = ${prodotti[i].quantita};
        const cellaPrezzo = document.createElement('td');
        cellaPrezzo.innerText = ${prodotti[i].prezzo};

        nuovaRiga.appendChild(cellaImmagine);
        nuovaRiga.appendChild(cellaNome);
        nuovaRiga.appendChild(cellaQty);
        nuovaRiga.appendChild(cellaPrezzo);
        tabella.appendChild(nuovaRiga);
    }

    contenitore.appendChild(tabella);
};
generateTable();




/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {
const nuovoProdotto = {
        id: 6,
        immagine: 'immagine6',
        nomeProd: 'prodotto 6',
        quantita: 2,
        prezzo: 20
}
prodotti.push(nuovoProdotto);

const tabella = document.querySelector('table');

const nuovaRiga = document.createElement('tr');


    const cellaImmagine = document.createElement('td');
    cellaImmagine.innerText = ${prodotti[i].immagine};
    const cellaNome = document.createElement('td');
    cellaNome.innerText = ${prodotti[i].nomeProd};
    const cellaQty = document.createElement('td');
    cellaQty.innerText = ${prodotti[i].quantita};
    const cellaPrezzo = document.createElement('td');
    cellaPrezzo.innerText = ${prodotti[i].prezzo};

    nuovaRiga.appendChild(cellaImmagine);
    nuovaRiga.appendChild(cellaNome);
    nuovaRiga.appendChild(cellaQty);
    nuovaRiga.appendChild(cellaPrezzo);
    tabella.appendChild(nuovaRiga);
};
addRow();




/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {

};
hideAllImages();




/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};
