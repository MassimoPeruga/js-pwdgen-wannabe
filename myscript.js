'use strict';
let nameUser = prompt("Inserici il tuo nome");
let lastnameUser = prompt("Inserici il tuo cognome");
let favColorUser = prompt("Inserici il tuo colore preferito");

function generaPasswordCasuale() {
    let randomPassword = "";
    for (let i = 0; i < 12; i++) {
        let numeroCasuale = Math.floor(Math.random() * 10);
        randomPassword += numeroCasuale;
    }
    return randomPassword;
}
let passwordGenerata = generaPasswordCasuale();

let infoUser = `Info utente: ${nameUser} ${lastnameUser} ${favColorUser} 21\n
Password consigliata: ${passwordGenerata}`;
document.write(infoUser);
console.log(infoUser);