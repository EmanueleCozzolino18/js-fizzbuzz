/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

//CICLO FOR CHE CI PERMETTE DI CONTARE I NUMER STAMPATI DA 1 A 100
for (let i = 1; i <= 100; i++) {

    //PRIMO CONTROLLO ANDIAMO A VERIFICARE SE I NUMERI STAMPATI SONO MULTIPLI DI 3 E 5
    if ((i % 3) === 0 && (i % 5) === 0) {

        console.log('FizzBuzz');

    } else console.log(i) //ALTRIMENTI STAMPA I NUMERI CHE NON SONO ME MULTIPLI DI 3 E 5
}

