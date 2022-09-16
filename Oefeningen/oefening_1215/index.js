let som = 0;
let teller = 1;
let gemiddelde = 0;

aantalGetallen = Number(prompt('Geef getal in:'));

while (teller <= aantalGetallen) {
    let getal = Number(prompt('Geef getal in'));

    som += getal;
    teller++;
}
console.log("De totale som van:", aantalGetallen, "getallen is", som);

gemiddelde = som / aantalGetallen;
console.log("Het gemiddelde van:", aantalGetallen, "getallen is", gemiddelde);