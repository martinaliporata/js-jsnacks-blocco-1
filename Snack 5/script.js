// Crea un array vuoto.
//  Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const array = []

let number1 = parseInt (prompt('Dimmi un numero'))
let number2 = parseInt (prompt('Dimmi un numero'))
let number3 = parseInt (prompt('Dimmi un numero'))
let number4 = parseInt (prompt('Dimmi un numero'))
let number5 = parseInt (prompt('Dimmi un numero'))
let number6 = parseInt (prompt('Dimmi un numero'))

if (number1%2 === 1) {
    array.push(number1)
}    