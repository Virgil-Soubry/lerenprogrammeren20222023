let fac = 1;
let teller = 1;
let opvangbak = "";

const getal = Number(prompt("Geef getal in:"))
while (teller <= getal) {
    fac *= teller;
    opvangbak = opvangbak + teller + "x";
    teller++;
}
console.log("De faculteit van", getal, "is", fac);
console.log(opvangbak.substring(0, opvangbak.length - 1) + "=" + fac)