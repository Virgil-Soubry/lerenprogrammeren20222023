let getal1 = Number(prompt("getal1"));
let getal2 = Number(prompt("getal2"));

/*selectie (conditie testen*/
if (getal1>getal2){
    console.log(getal1,"is groter dan getal", getal2);
}else{
    console.log(getal1, "is kleiner dan", getal2);
}

let naam = "Virgil";
let beroep = prompt("beroep? Bediende, arbeider, werkzoekend");
if (beroep ==="bediende"){console.log("U bent bediende");

}else if (beroep ==="arbeider"){console.log("U bent arbeider");}else {console.log("U bent werkzoekend");

}

/** verkorte notatie if statement **/

let getal1 = 2;
let getal2 = 3;

getal1>getal2 ? console.log("getal1 is groter") : console.log("getal2 is groter");

/** originele vorm **/
if (getal1>getal2){
    console.log("getal1 is groter")
}else{
    console.log("getal2 is groter");
}