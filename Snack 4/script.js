// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const array = ["martina", "tiziano", "marco", "luca", "diego"];
array[0];
array[1];
array[2];
array[3];
array[4]

const nomeUtente = prompt('qual è il tuo nome')
nomeUtente = nomeUtente.charAt(0).toLocaleUpperCase() + 

if (nomeUtente === array[0]) {
    console.log('Entra')
} else if (nomeUtente === array[1]) {
    console.log('Entra')
} else if (nomeUtente === array[2]) {
    console.log('Entra')
} else if (nomeUtente === array[3]) {
    console.log('Entra')
} else if (nomeUtente === array[4]) {
    console.log('Entra')
} else {
    console.log ('Non entrare')
}

// meglio con includes
// if (array.includes(nomeUtente)) {
//     console.log('Join')
// } else {
//     console.log('No')
// }