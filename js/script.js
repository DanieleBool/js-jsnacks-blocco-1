// Jsnack 1

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// FOR
// let result = 0;
// for(let i = 0; i <= 4; i++){
//     let n = parseInt(prompt('Inserisci il numero'));
//     // console.log(n);
//     result += n;
// }

// alert('la somma dei numeri inseriti è: ' + result);

// WHILE

// let result = 0;
// let i = 0;
// while(i <= 4){
//     let n = parseInt(prompt('Inserisci il numero'));
//     i++
//     result += n;
// }
// alert('la somma dei numeri inseriti è: ' + result);

// __________________________________________________________________________________________
// JSnack 2

// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, 
// stamparle entrambe altrimenti stampare la più lunga delle due.


// TENTATIVO CON FUNCTION E ARRAY
// const array = [];
//     array[0] = prompt('inserisci parola');
//     array[1] = prompt('inserisci parola');
// // function miaFunction(){

    
//     if(array.length[0] == array.length[1]){
//         alert(array[0] + array[1]);
//     }else if(array.length[0] > array.length[1]){
//         alert(array[0]);
//     }else{
//         alert(array[1]);
//     }
// // }

// const one = prompt('Inserisci parola');
// const two = prompt('Inserisci la seconda parola');

// if(one.length == two.length){
//     alert(one + 'e' + two + 'hanno la stessa lunghezza');
// }else if(one.length > two.length){
//     alert(one);
// }else{
//     alert(two);
// }


// ___________________________________________________________________________________________
// JSnack 3

// Stampa le potenze di 2 fino a 1000.

let i = 0
let potenza;

while (i < 1000){
    potenza = Math.pow(i, 2);
    i++;
    console.log(potenza);
}