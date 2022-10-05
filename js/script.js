/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21(dove il 21 è in questo caso l'età)
*/

const userName = prompt ('Il tuo Nome?');
// console.log('userName', userName)
const userSurname = prompt ('Ed ora il tuo Cognome?');
// console.log('userSurname', userSurname)
const userColor = prompt ('Il tuo colore preferito?');
// console.log('userColor', userColor)
let userAge = parseInt(prompt('Inserisci la tua età'));
// console.log('userAge', userAge)

const result = `
Benvenuto ${userName}!
<br>
La tua password generata è: ${userName}${userSurname}${userColor}${userAge}

`
// console.log('result', result)

const element = document.getElementById('myId');
// console.log('element', element)

element.innerHTML = result;