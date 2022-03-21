let container = document.getElementById("container");

let word = prompt("Inserire una parola:");

checkPalindroma(word);

function checkPalindroma(word) {

    // La sequenza consiste in: 
    // - String(word): Word è una stringa 
    // - .replace(/\s+/g, '') Levo gli spazi
    // - .split(""): word diventa un array dove ogni posizione contiene una lettera
    // - .reverse(): Capovolgo l'array 
    // - .join(): Trasformo l'array in una stringa

    const reverseWord = String(word).replace(/\s+/g, '').split('').reverse().join('');

    // Metodo con function custom
    // let reverseWord = arrayReverse(String(word).replace(/\s+/g, '').split('')).join('');
    
    console.log(reverseWord);

    wordNoSpace = String(word).replace(/\s+/g, '');


    // Confronto se la parola inserita e quella capovolta sono uguali
    if (wordNoSpace.toUpperCase() == reverseWord.toUpperCase()) {
        container.innerHTML = `${word} è palindromo`;
    } else {
        container.innerHTML = `${word} non è palindromo`;
    }
}

// Funzione custom per capovolgere un array
// function arrayReverse(array){

//     let x = 0;
//     for(i = array.length - 1; i >= 0; i--){
//         array[x] = array[i];
//         x++;
//     }

//     return array;
// }