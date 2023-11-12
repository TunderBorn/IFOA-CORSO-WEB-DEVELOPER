/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
const myConcat = function (str1, str2) {
  const stringa1 = str1.slice(0, 2);
  const stringa2 = str2.slice(-3);
  const stringa3 = stringa1 + stringa2;

  const risultatoMaiuscolo = stringa3.toUpperCase();

  console.log("Esercizio 1");
  console.log(risultatoMaiuscolo);
};
myConcat("godzilla ", " gigan");



/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
// creare funzione
// all'interno creare array vuoto
// per 10 volte...
// generi un numero casuale
// e lo pushi
// torni l'array
function generaArrayCasuale() {
  var arrayCasuale = [];

  for (var i = 0; i < 10; i++) {
    var numeroCasuale = Math.floor(Math.random() * 101);
    arrayCasuale.push(numeroCasuale);
  }

  return arrayCasuale;
}
var risultatoArrayCasuale = generaArrayCasuale();
console.log("Esercizio 2");
console.log(risultatoArrayCasuale);



/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function trovaValoriPari(array) {
  return array.filter((numero) => numero % 2 === 0);
}

let arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valoriPari = trovaValoriPari(arrayNumerico);
console.log("Esercizio 3");
console.log(valoriPari);



/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArrayForEach(array) {
  let somma = 0;

  array.forEach(function (numero) {
    somma += numero;
  });

  return somma;
}

let numeri = [1, 2, 3, 4, 5];
let risultatoForEach = sommaArrayForEach(numeri);
console.log("Esercizio 4");
console.log(risultatoForEach);



/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArrayReduce(array) {
  let somma = array.reduce((acc, current) => acc + current, 0);
  return somma;
}

let numbers = [1, 2, 3, 4, 5];
let risultatoReduce = sommaArrayReduce(numbers);
console.log("Esercizio 5");
console.log(risultatoReduce);



/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const arrayOriginale = [1, 2, 3];
const n = 5;

function incrementaArray(arr, n) {
  const nuovoArray = arr.map((numero) => numero + n);
  return nuovoArray;
}

const nuovoArray = incrementaArray(arrayOriginale, n);
console.log("Esercizio 6");
console.log(nuovoArray);



/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
var risultatoStringhe = lunghezzeStringhe(["EPICODE", "is", "great"]);

function lunghezzeStringhe(arrayDiStringhe) {
  return arrayDiStringhe.map(function (stringa) {
    return stringa.length;
  });
}

console.log("Esercizio 7");
console.log(risultatoStringhe);



/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function creaArrayDispari() {
  var arrayDispari = [];

  for (var i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }

  return arrayDispari;
}

var risultatoDispariFor = creaArrayDispari();
console.log("Esercizio 8");
console.log(risultatoDispariFor);



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function trovaFilmPiuVecchio(movies) {
  let filmPiuVecchio = movies[0];

  movies.forEach(function (film) {
    const annoFilmCorrente = parseInt(film.Year);
    const annoFilmPiuVecchio = parseInt(filmPiuVecchio.Year);

    if (annoFilmCorrente < annoFilmPiuVecchio) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}

const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log("Esercizio 9");
console.log(filmPiuVecchio);



/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function getNumberOfMovies(movies) {
  return movies.length;
}

const numberOfMovies = getNumberOfMovies(movies);
console.log("Esercizio 10");
console.log(`Il numero di film è: ${numberOfMovies}`);


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const movieTitles = movies.map(movie => movie.Title);
console.log("Esercizio 11");
console.log(movieTitles);


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function getMillenniumMovies(movies) {
  const currentYear = new Date().getFullYear();
  return movies.filter(movie => parseInt(movie.Year) >= currentYear - 1000 && parseInt(movie.Year) <= currentYear);
}

const millenniumMovies = getMillenniumMovies(movies);
console.log("Esercizio 12");
console.log(millenniumMovies);



/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const anniFilm = movies.map(film => parseInt(film.Year));
const sommaAnni = anniFilm.reduce((acc, anno) => acc + anno, 0);

console.log("Esercizio 13");
console.log(sommaAnni);



/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function findMovieById(imdbID) {
  return movies.find(movie => movie.imdbID === imdbID);
}

const movieFound = findMovieById('tt0167260');
console.log("Esercizio 14");
console.log(`Film trovato: ${movieFound.Title}`);


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function findFirstMovieByYear(year) {
  const index = movies.findIndex(movie => movie.Year === year);
  return index;
}
const yearToFind = '2005';
const index = findFirstMovieByYear(yearToFind);
console.log("Esercizio 15");
console.log(`Il primo film uscito nel ${yearToFind} si trova all'indice ${index}.`);
