let aantalGetal = Number(prompt("geef aantal getallen"));
let i = 1;
let totaleSom = 0
for (i; i <= aantalGetal; i++) {
    let ingaveGetal = Number(prompt("geef "+ i+ " in"));
    totaleSom = totaleSom + ingaveGetal
}
console.log("De totale som van ",aantalGetal, "is", totaleSom)

