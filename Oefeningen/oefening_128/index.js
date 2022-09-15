let ingegevenGetal = Number(prompt("Voer een getal in."));
let i = 0;
let y = 1;
let opvangbak = ""

for (i; i <= ingegevenGetal; i++) {
    opvangbak = opvangbak + y + ",";
    if (y <= ingegevenGetal) {

        console.log(y);
    }
    y *= 2;

}
