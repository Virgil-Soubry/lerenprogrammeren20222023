let tekenReeks = prompt("geef een zin in:");
let karakter = prompt("geef een letter (karakter) in:");

let aantalKarakters = 0

for (let plaats = 0; plaats <= tekenReeks.length; plaats++) {
    if (tekenReeks.charAt(plaats )=== karakter){
        aantalKarakters++;
        // aantalKarakters += 1
        // aantalKarakters = aantalKarakters + 1
    }
        }
console.log(aantalKarakters)