// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const numbers= [6, 8, 9, 13, 18, 23, 30];
let somma = 0; 

// ciclo per ogni numero present nell'array
for(let index = 0; index < numbers.length ; index++) {
// verifico per ogni iterazione se l'indice su cui sto iterando è dispari
    if (index % 2 === 1) {
// se è dispari aggiungo elemento alla somma
        somma += numbers[index];    
    }
}

console.log(numbers, somma);