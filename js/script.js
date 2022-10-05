/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21(dove il 21 è in questo caso l'età)
*/

const userName = prompt ('Il tuo Nome?');
const userSurname = prompt ('Ed ora il tuo Cognome?');
const userColor = prompt ('Il tuo colore preferito?');
let userAge = parseInt(prompt('Inserisci la tua età'));

const result = `
Benvenuto ${userName}!
<br>
La tua password generata è: ${userName}${userSurname}${userColor}${userAge}

`

const element = document.getElementById('myId');

element.innerHTML = result;