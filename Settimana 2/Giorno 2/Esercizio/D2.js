/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let numero1 = 10;
let numero2 = 2;

if (numero1 < numero2) {
  console.log('I numeri sono: ' + numero1 + ',' + numero2 + ':' + 'il secondo numero è maggiore')
} else {
  console.log('I numeri sono: ' + numero1 + ',' + numero2 + ':' + 'il primo numero è maggiore')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numero3 = 7;

if(numero3 != 5) {
console.log('Il numero è: ' + numero3 + ',' + ' il numero è diverso da 5')
} else {
  console.log('Il numer è: ' + numero3 + ',' + 'il numero è uguale a 5')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero4 = 10;

if (numero4 % 5 == 0) {
console.log('Il numero è: ' + numero4 + ',' + ' il numero è divisibile per 5')
} else {
  console.log ('Il numero è: ' + numero4 + ',' + ' il numero non è divisibile per 5')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numero5 = 3;
let numero6 = 5;
let somma = numero5 + numero6;

if (numero5 === 8 || numero6 === 8 || numero5 + numero6 ===8 || numero5 - numero6 ===8) {
console.log('I numeri sono: ' + numero5 + ',' + numero6 + ':' + 'Verificato')
} else {
  console.log('I numeri sono: ' + numero5 + ',' + numero6 + ':' + 'Non Verificato')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 55;
let spedizione = 10;
let totale = totalShoppingCart;

if (totalShoppingCart < 50) {
  totale += spedizione;
console.log('totale carrello: ' + totalShoppingCart + '.' + 'totale inferiore. Non hai lo sconto e Il tuo totale è: ' + totale)
} else {
  totale -= spedizione;
  console.log('totale carrello: ' + totalShoppingCart + '.' + 'totale superiore. Hai lo sconto e Il tuo totale è: ' + totale)
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 55;
let spedizione2 = 10;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let totale2 = totalShoppingCart2;

if (totalShoppingCart2 < 50) {
  totale2 += spedizione2;
console.log('totale carrello: ' + totalShoppingCart2 + '.' + 'totale inferiore. Non hai lo sconto e Il tuo totale è: ' + totale2)
} else {
  totale2 -= spedizione2;
  console.log('totale carrello: ' + totale2 + '.' + 'totale superiore. Hai lo sconto e Il tuo totale è: ' + totale2)
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let x1 = 27;
let x2 = 12;
let x3 = 45;

if (x2 > x1) {

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2];
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let myArray = [];
myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;
myArray[3] = 4;
myArray[4] = 5;
myArray[5] = 6;
myArray[6] = 7;
myArray[7] = 8;
myArray[8] = 9;
myArray[9] = 10;
console.log(myArray);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
myArray[9] = 100;
console.log(myArray);
/* SCRIVI QUI LA TUA RISPOSTA */
