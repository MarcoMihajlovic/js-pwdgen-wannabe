var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colore = prompt('Inserisci il tuo colore preferito');
var password = nome + cognome + colore + '19';

alert('La tua password generata è ' + password);

document.getElementById('my_id').innerHTML = password;