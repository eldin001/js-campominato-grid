/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. */

//! seleziono il bottone e lo salvo in una variabile
let buttonElement = document.getElementById('button');

//!comportamento una volta premuto il bottone
buttonElement.addEventListener('click', function(){
    createBox()
})

//!questa funzione genererà 100 box nel mio main

function createBox() {
    for (let i = 0; i < 100; i++) {
        let newElement = document.createElement('div');
        newElement.classList.add('square')
        let mainElement = document.querySelector('main');
        mainElement.appendChild(newElement);
    }
}


