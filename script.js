/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. */

//!questa funzione genererà 100 box nel mio main, all'interno c'è un altro event listner che attava il colore e il mesaggio in console.


function createBoxAndColor() {
    let mainElement = document.querySelector('main');
    let selectValue = document.getElementById('difficulty').value;
    console.log(selectValue);
    mainElement.innerHTML = '';
        if (selectValue === 'easy') {
            for (let i = 1; i <= 100; i++) {
                let newElement = document.createElement('div');
                newElement.classList.add('square');
                mainElement.appendChild(newElement);
                newElement.addEventListener('click', function() {
                newElement.classList.add('colored-square');
                console.log(i);
            })
        }
        } else if (selectValue === 'difficult') {
            for (let i = 1; i <= 81; i++) {
                let newElement = document.createElement('div');
                newElement.classList.remove('square');
                newElement.classList.add('square-medium');
                mainElement.appendChild(newElement);
                newElement.addEventListener('click', function() {
                newElement.classList.add('colored-square');
                console.log(i);
                })
            }
         } else {
            for (let i = 1; i <= 49; i++) {
                let newElement = document.createElement('div');
                newElement.classList.remove('square-medium');
                newElement.classList.add('square-difficult');
                mainElement.appendChild(newElement);
                newElement.addEventListener('click', function() {
                newElement.classList.add('colored-square');
                console.log(i);
                })
            }
         }
}

//! seleziono il bottone e lo salvo in una variabile
let buttonElement = document.getElementById('button');

//!comportamento una volta premuto il bottone
buttonElement.addEventListener('click', function(){
    createBoxAndColor();
})

//!







