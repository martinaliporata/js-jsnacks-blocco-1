// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. 
// Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

// crea elemento nel DOM
// const main = document.querySelector(main.prova)
// const divRosso = document.createElement('div')
// divRosso.style.color = 'red'

// const array = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0 ; i < array.length ; i++) {
//     if (array.values%2 === 1) {
//         console.log('Numero dispari')
//     } else {
//         console.log('Numero pari')
//     }
// }


// correzione

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const containerEl = document.querySelector('section.output')

const redDiv = document.createElement('div')
redDiv.classList.add('font-red')

const greenDiv = document.createElement('div')
greenDiv.classList.add('font-green')

for (let i = 0 ; i < numbers.length ; i++) {
    const newElement = document.createElement('p');
    newElement.append(numbers[i]);

// nomearray[indice] mi dà elemento di nome array con indice indice
    if (numbers[i]%2 === 0) {
        greenDiv.appendChild(newElement)
    } else {
        redDiv.appendChild(newElement)
    }
}

containerEl.appendChild(redDiv);
containerEl.appendChild(greenDiv)