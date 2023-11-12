/*1. Dobbiamo capire in che mese siamo, per scriverlo in h1, e quanti giorni ha un mese per generare il corretto numero di celle*/

const now = new Date();
/* Per salvare gli appuntamenti abbiamo bisogno di array, ogni appuntamento è una stringa, ogni giorno può contenere infinti appuntamenti e ogni mese ha un numero di giorni varaibile.
Creeremo quindi un array di array, dove l'array padre è il mese e gli array figli i giorni
[ rappresenta il mese
    [1 giorno], [2 giorno], [3 giorno], [4 giorno], ....
]

Es. oggi è 10 novembre: array padre novembre, array figli 30 giorni
[
    [],
    [],
    [],
    [],
    ['09:00 - live coding calendario', '14:00 - esercizio quotidiano tombola', '18:00 - aperitivo'],
    [],
    [],
    [],
    ...
]

 Non sapendo quanti giorni ci sono nel mese in corso, si crea il "guscio" del mese*/

const appointments = [];

// Dentro pushiamo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const scriviMese = function () {
  const title = document.querySelector("h1");
  const indiceMese = now.getMonth();
  const nomeMese = monthNames[indiceMese];
  title.innerText = nomeMese;
};
scriviMese();

// Funzione per calcolare i giorni
// Febbrario in anni bisestili ha 29 giorni, sapere il mese quanti giorni ha in base l'anno

const giorniTotali = function () {
  const anno = now.getFullYear();
  const mese = now.getMonth();

  // Nell'oggetto Date il numero dei giorni del mese parte da 1 e non da 0, mi basta sapere qual'è l'ultimo giorno del mese per sapere i numeri dei giorni mensili
  // Per sapere l'ultimo giorno del in corso, creo la data del primo giorno del mese successivo al mese in corso e faccio -1

  let ultimoGiorno = new Date(anno, mese + 1, 0); // Oggi è il 0 Dicembre 2023, che non esiste quindi è il 30 Novembre 2023; Novembre ha 30 giorni
  const numeroGiorni = ultimoGiorno.getDate();
  return numeroGiorni; // numeroGiorni è il numero di volte per cui dovrò ripetere la creazione di div corrispondenti ai singoli giorni
};
giorniTotali();

// Quando carico il mese, eventuali classi selectede precedenti devono essere rimosse, altrimenti mi troverò selezionati i giorni del mese precedente che avevo degli appuntamenti

// Seleziono tutti gli elementi con classe selected e rimuovo classe
const deselezionaCelle = function () {
  const celle = document.querySelectorAll("day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  });
};

// Quando faccio click su un giorno, nel div " newMeetingDay, dovrò leggere la data selezionata"

const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay");
  giorno.classList.add("hasDay");
  giorno.innerText = indiceGiorno + 1;
};

// A questo punto creo la "griglia" dei div contenenti i giorni del mese in corso e userà il numero di giorni per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (numeroGiorni) {
  const calendarDiv = document.getElementById("calendar");

  for (let i = 0; i < numeroGiorni; i++) {
    const cellaGiorno = document.createElement("div");
    cellaGiorno.classList.add("day");

    cellaGiorno.addEventListener("click", function (e) {
      deselezionaCelle();
      cellaGiorno.classList.add("selected");
      giornoAppuntamento(i);

      if (appointments[i].length > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById("appointments");
        divAppuntamenti.style.display = "none";
      }
    });
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;

    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    appointments.push([]);
  }
};
creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {

    const appuntamentiGiorno = appointments[indiceGiorno];
    const lista = document.querySelector('#appointments ul');
    lista.innerHTML = '';

    appuntamentiGiorno.forEach((element) => {
       const newLi = document.createElement('li');
       newLi.innerText = element;
       lista.appendChild(newLi);
    });
    const divAppuntamenti = document.getElementById('appointments');
    divAppuntamenti.style.display = 'block';
};

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedDay = document.getElementById('newMeetingDay').innerText;

    const meetingTime = document.getElementById('newMeetingTime').value;

    const meetingName = document.getElementById('newMeetingName').value;

    const stringaAppuntamento = `${meetingTime} - ${meetingName}`;

    const indiceArray = parseInt(selectedDay) - 1;
    appointments[indiceArray].push(stringaAppuntamento);

    const pallino = document.createElement('div');
    pallino.classList.add('pallino');

    const divSelezionato = document.querySelector('.selected');
    if (!divSelezionato.querySelector('.pallino')) {
        divSelezionato.appendChild(pallino);
    }
    mostraAppuntamenti(indiceArray);
});

