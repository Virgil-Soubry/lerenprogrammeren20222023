/**
 - Schrijf een programma waarmee je aan de gebruiker vraagt om getallen in te geven
 tot hij een negatief getal intikt. Lees de getallen in een array in.

 - Geef GETAL x in:

 - Vervolgens vraag je aan de gebruiker het hoeveelste getal hij wenst te zien op het
 scherm.**/

let getal = 0;
let getallenArray = [];
let teller = 1;

while (getal >= 0) {
    getal = Number(prompt(`Geef getal ${teller} in`))
    getallenArray.push(getal);
    teller++
}
let index = Number(prompt("Het hoeveelste getal wenst u te zien?")) - 1;
index = getallenArray[index];
document.write(index);