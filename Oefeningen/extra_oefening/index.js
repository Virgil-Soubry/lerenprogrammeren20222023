/*
Vraag raad het nummer?
-groter of kleiner
-aantal dat keer geraden is
-resultaat in hoeveel pogingen
 */


/*let nummer = 9;
var ingave = Number(prompt("Raad het getal:"));
var count = 0;
for (let i = 1; i > 0; i++) {

    if (ingave > nummer) {
        alert("KLEINER, probeer opnieuw");
        count++;
        ingave = Number(prompt("Raad het getal:"));
    } else if (ingave < nummer) {
        alert("GROTER, probeer opnieuw");
        count++;
        ingave = Number(prompt("Raad het getal:"));
    } else {
        count++;
        console.log("goed geraden het getal is", nummer, "je hebt er", count, "keer over geraden");
        alert("goed geraden");
        i = -1;
    }

}*/

/*
Vraag raad het nummer?
-groter of kleiner
-aantal dat keer geraden is
-resultaat in hoeveel pogingen
 */

let nummer = 15;
let ingave = Number(prompt("Vul een getal in"));
let count = 0;

for (let i = 1; i > 0; i++) {
    if (ingave > nummer) {
        alert("KLEINER, probeer opnieuw");
        count++;
        ingave = Number(prompt("Raad het getal:"));
    } else if (ingave < nummer) {
        alert("GROTER, probeer opnieuw");
        count++;
        ingave = Number(prompt("Raad het getal:"));
    } else {
        count++;
        console.log("goed geraden het getal is", nummer, "je hebt er", count, "keer over geraden");
        alert("goed geraden");
        i = -1
    }
}

