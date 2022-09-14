let yearOfBirth = Number(prompt("Vul je geboortejaar in"));
let runningYear = Number(prompt("Vul het huidig jaar in"));
let age = runningYear - yearOfBirth
if ( age >= 18) {
    console.log("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen");
} else {
    console.log("Gelukkig heb ik mijn ouders die alles voor me regelen.");
}
