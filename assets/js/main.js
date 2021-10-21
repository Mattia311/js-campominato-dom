/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range: 
con difficoltà 1 => tra 1 e 100 
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/



/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.*/





/*In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando
il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

const askDifficulty = parseInt(prompt('Benvenuto nel gioco Campo Minato. Ora dovrai scegliere la difficoltà del gioco che va da 1 a 3'));

console.log(askDifficulty);

const testo = document.getElementById('testo')

const containerEle = document.querySelector('.container')
const containerEle_1 = document.querySelector('.container1')
const containerEle_2 = document.querySelector('.container2')


if(askDifficulty == 1) {

    for (let i = 1; i <= 100; i++) {
        console.log(i);
        

        const elemento = document.createElement('div');
        elemento.className = 'grid_cell'
        containerEle.append(elemento);
        
        elemento.innerHTML = i;
        
        testo.innerHTML = ('Questo è il livello facile');

        const bombs = []
        
        elemento.addEventListener('click', function() {
             if(numRandom == i) {

                this.style.background = 'red'
            } else {
                this.style.background = 'blue'
            }
        })

        elemento.addEventListener('click', function () {
            const cellNumber = parseInt(this.innerText)
            console.log(cellNumber);
            is_a_bomb(cellNumber, bombs)
        })
          
    }
    
    for (let i = 0; i < 16; i++) {
    
        const min = 1
        const max = 100
        
        const numRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        
        console.log(numRandom);
    }
    
    
    
    
} else if(askDifficulty == 2) {
    
    for (let i = 1; i <= 81; i++) {
        console.log(i);
        const number = `${i}`;

        const elemento = document.createElement('div');
        elemento.className = 'grid_cell'
        containerEle_1.append(elemento);

        testo.innerHTML = ('Questo è il livello intermedio')


        elemento.innerHTML = i;

        const bombs = []
        
        elemento.addEventListener('click', function() {
            if([i].includes(bombs)) {

                this.style.background = 'red'
            } else {
                this.style.background = 'blue'
            }
        })

        elemento.addEventListener('click', function () {
            // prendere il contenuto della cell
            const cellNumber = parseInt(this.innerText)
            console.log(cellNumber);
            // verifica se la cella é una bomba
            is_a_bomb(cellNumber, bombs)
        })
    }
    for (let i = 0; i < 16; i++) {
    
        const min = 1
        const max = 81
        
        const numRandom = Math.floor(Math.random() * (81 - 1 + 1)) + 1;
            console.log(numRandom);
        
    }



}else if (askDifficulty == 3) {

    for (let i = 1; i <= 49; i++) {
        console.log(i);
        const number = `${i}`;

        const elemento = document.createElement('div');
        elemento.className = 'grid_cell'
        containerEle_2.append(elemento);

        testo.innerHTML = ('Questo è il livello difficile')

        elemento.innerHTML = i;

        const bombs = []
        
        elemento.addEventListener('click', function() {
            if([i].includes(bombs)) {

                this.style.background = 'red'
            } else {
                this.style.background = 'blue'
            }
        })

        elemento.addEventListener('click', function () {
            // prendere il contenuto della cell
            const cellNumber = parseInt(this.innerText)
            console.log(cellNumber);
            // verifica se la cella é una bomba
            is_a_bomb(cellNumber, bombs)
        })
    }
    for (let i = 0; i < 16; i++) {
    
        const min = 1
        const max = 49
        
        const numRandom = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
            console.log(numRandom);
        
    }
}

function is_a_bomb(grid_cell, bombs) {
    if (bombs.includes(grid_cell)) {
      console.log('è una bomba! Game over');
    } else {
      console.log('continua a giocare');
    }
  }


  




