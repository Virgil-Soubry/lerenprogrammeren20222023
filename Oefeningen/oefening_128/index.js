let ingegevenGetal = Number(prompt("Voer een getal in."));
let i = 0;
let y = 1;
let opvangbak = ""

for (i; i <= ingegevenGetal; i++) {

    if (y <= ingegevenGetal) {
        opvangbak = opvangbak + y + ",";
        // console.log(y);
    }
    y *= 2;
}
console.log(opvangbak.substring(0,opvangbak.length-1));

