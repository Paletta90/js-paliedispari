let container = document.getElementById("container");

let word = prompt("Inserire una parola:");

checkPalindroma(word);

function checkPalindroma(word) {

    // La se quenza consiste in: 
    // - String(word): Word è una stringa 
    // - .replace() Levo gli spazi
    // - .split(""): Word diventa un array dove ogni posizione 
    // - .reverse(): Rigiro l'array 
    // - .join(): Trasformo l'array in una stringa

    const reverseWord = String(word).replace(/\s+/g, '').split('').reverse().join('');

    wordNoSpace = String(word).replace(/\s+/g, '');


    // Confronto se la parola inserita e quella capovolta sono uguali
    if (wordNoSpace.toUpperCase() == reverseWord.toUpperCase()) {
        container.innerHTML = `${word} è palindromo`;
    } else {
        container.innerHTML = `${word} non è palindromo`;
    }
}