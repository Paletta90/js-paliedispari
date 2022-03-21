let container = document.getElementById("container");

// Scelgo Pari o Dispari
let choice = String(prompt("Digitare P per pari o D per dispari")).toUpperCase();
// Inserisco un numero da 1 a 5
let numUtente = parseInt(prompt("Digitare un numero da 1 a 5"));

oddEvenGame(choice, numUtente);

function oddEvenGame(choice, numUtente){

    if((choice != "D" && choice != "P") || (numUtente < 1 || numUtente > 5 )){

        alert("Dati inseriti errati!");
        location.reload();

    }else{

        // Ottengo numero random computer
        let numComputer = random1to5();

        // Somma dei due numeri
        let tot = numUtente +  numComputer;

        // Ottengo se il totale è pari o dispari
        let risultato = oddEven(tot);

        container.innerHTML += `<span>Utente ${choice}: ${numUtente} Computer: ${numComputer} Totale: ${tot} ---> </span>`;

        // Se totale è pari
        if(risultato == true){

            // Stampo che il numero è pari
            container.innerHTML += `<span>Numero Pari </span>`;

            // Se utente aveva scelto pari
            if(choice == "P"){
                container.innerHTML += `<span>Vince utente</span>`;
            }else{
                container.innerHTML += `<span>Vince computer</span>`;
            }

        }
        // Se totale è dispari
        else{

            // Stampo che il numero è dispari
            container.innerHTML += `<span>Numero Dispari </span>`;

            if(choice == "P"){
                container.innerHTML += `<span>Vince computer</span>`;
            }else{
                container.innerHTML += `<span>Vince utente</span>`;
            }

        }

    }   
}

// Genera un numero da 1 a 5
function random1to5 (){

    let num = Math.floor( ( Math.random() * 5 ) + 1);
    return num;

}

// Ritorna true se num pari e false se numero dispari
function oddEven (num){

    let check = false;

    if(num % 2 == 0){
        check = true;
    }

    return check;
    
}