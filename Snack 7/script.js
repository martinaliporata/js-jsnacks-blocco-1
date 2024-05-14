// Fai inserire un numero, che chiameremo N, all'utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N = parseInt(prompt('scrivi un numero'));

for (let i = 0; i > N.valueOf.lenght; i++) {
    const prova = [(Math.random() * 100) + 1];
    console.log(prova)
}

// correzione
// ciclo for da 0 a numeroUtente
// creo un array nuovo
// genero con un for per 10 elementi casuali aggiunti all'array nuovo
// stampo l'array nuovo

let userNumber = Number.parseInt(prompt('Tyoe a number'), 10);
if (userNumber > 20 || userNumber < 1 || Number.isNaN(userNumber)) {
    userNumber = 12;
}

// setta automaticmanete a 12

for (let index = 0; index < userNumber; index++) {
    const tempArray = [];

    for (let index = 0; index < 10; index++) {
        tempArray.push(Math.floor (Math.random()*100) + 1);
    }

    console.log(tempArray)
}