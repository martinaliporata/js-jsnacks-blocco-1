// Crea un array vuoto.
//  Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const numbersArray = []

for (let index = 0; index < 6 ; index++) {
    const userNumber = Number.parseInt(prompt('type a number'), 10);
    if (userNumber % 2 === 1) {
        numbersArray.push(userNumber)
    }
}

console.log(numbersArray)