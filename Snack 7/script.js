// Fai inserire un numero, che chiameremo N, all'utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N = parseInt(prompt('scrivi un numero'))

for (let i = 0; i > N.lenght; i++) {
    const prova = [(Math.random() * 100) + 1]
    console.log(prova)
}