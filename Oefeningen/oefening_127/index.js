let ingegevenGetal = Number(prompt("Voer een getal in."));
let i = 1;

while (ingegevenGetal >100){
    ingegevenGetal = Number(prompt("Kleiner of gelijk aan 100."));
}

for (i; i <= ingegevenGetal; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}

