/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
  return l1 * l2;
}
let risultatoArea = area(5, 12);

console.log("Esercizio 1");
console.log("L'area del rettangolo è: " + risultatoArea);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
let risultato1 = crazySum(2, 3);
let risultato2 = crazySum(5, 5);

console.log("Esercizio 2");
console.log(risultato1);
console.log(risultato2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(numero) {
  let differenza = Math.abs(numero - 19);

  if (numero > 19) {
      differenza * 3;
  } 
    return differenza;
 }
let risultatoDiff1 = crazyDiff(25);
let risultatoDiff2 = crazyDiff(10);
console.log("Esercizio 3");
console.log(risultatoDiff1);
console.log(risultatoDiff2);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(numero) {
  if ((numero >= 20 && numero <= 100) || numero === 400) {
    return true;
  } else {
    return false;
  }
}
let risultatoBoundary1 = boundary(67);
let risultatoBoundary2 = boundary(400);
let risultatoBoundary3 = boundary(17);
console.log("Esercizio 4");
console.log(risultatoBoundary1);
console.log(risultatoBoundary2);
console.log(risultatoBoundary3);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + str;
  }
}

console.log("Esercizio 5");
console.log(epify("EPICODE vs GODZILLA"));
console.log(epify(" ZATURA vs JUMANJI"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(numero) {
  numero = Math.abs(numero);
  
  if (numero % 3 === 0 || numero % 7 ===0) {
    console.log("divisibile per 3 e 7");
  } else if (numero % 3 === 0) {
    console.log("divisibile per 3");
  } else if (numero % 7 === 0){
    console.log("divisibile per 7");
  } else {
    console.log("non è divisibile per 3 o 7");
  }
}
let risultatocheck1 = check3and7(21);
let risultatocheck2 = check3and7(10);

console.log("Esericzio 6");
console.log(risultatocheck1);
console.log(risultatocheck2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str) {
  let stringaCapovolta = str.split("").reverse().join("");
  return stringaCapovolta;
}

console.log("Esercizio 7");
console.log(reverseString("GODZILLA"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let parole = "godzilla, king kong, mothra, king ghidora";

function upperFirst(str) {
    let arrayfrase = str.split(' ');

    for (let i = 0; i < arrayfrase.length; i++) {
        arrayfrase[i] = arrayfrase[i].charAt(0).toUpperCase() + arrayfrase[i].slice(1);
    }
    // Unisci le parole e restituisci la stringa risultante
    return arrayfrase.join(' ');
}

let risultatoUpper = upperFirst(parole);
console.log("Esercizio 8");
console.log("Frase prima: " + parole);
console.log("Frase dopo: " + upperFirst(parole));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa) {
    return stringa.slice(1, stringa.length, -1);
}

console.log("Esercizio 9");
console.log(cutString("King Kong"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(numero) {
  let arrayNumeri= [];
  for(let i = 0; i < numero; i++) {
    arrayNumeri.push(Math.floor(Math.random() * 11));
  }
  return arrayNumeri;
}

console.log("Esercizio 10");
console.log(giveMeRandom(8));
/* SCRIVI QUI LA TUA RISPOSTA */
