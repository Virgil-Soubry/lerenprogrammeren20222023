/**Vraag aan de gebruiker om een begingetal en een eindgetal in te geven. Zorg ervoor dat je een onderstaand resultaat kan bereiken.
 Voorbeeld:
 Geef een begingetal in: 2
 Geef een eindgetal in: 6
 Resultaat: 2*3*4*5*6 = 720**/
let getal1 = Number(prompt("Geef een getal in:"));
let getal2 = Number(prompt("Geef een getal in:"));
let fac = 1
let opvangbak = " "
for (let i = getal1;i<=getal2;i++){
 fac =  fac * i
    opvangbak = opvangbak + i + "*"

}
console.log(opvangbak)


