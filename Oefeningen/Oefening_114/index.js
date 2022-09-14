let yearOfBirth = Number(prompt("Vul je geboortejaar in"));
let runningYear = Number(prompt("Vul het huidig jaar in"));
let age = runningYear - yearOfBirth

if (age >= 18) {
    console.log("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen");

} else if (runningYear - yearOfBirth < 0) {
    alert("Error: je mag geen negatief getal uitkomen, als je dit bekomt ben je nog niet geboren.", console.log("Gaat niet!!"));
} else {
    console.log("Gelukkig heb ik mijn ouders die alles voor me regelen.");
}
