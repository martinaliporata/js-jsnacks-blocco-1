// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const number1 = parseInt (prompt('Dimmi un numero'));
console.log(number1)

const number2 = parseInt (prompt('Dimmi un altro numero'));
console.log(number2)

if (number1 > number2) {
    console.log(number1)
} else {
    console.log(number2)
}