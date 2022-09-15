/*
const tafel = Number(prompt("geef een tafel(getal) in"));
let eindGetal = Number(prompt("Geef een eind getal in:"))
let opvangbak = ""

for (let i = 1; i <= eindGetal; i++) {
    let x = tafel + " x " + i + " = " + (tafel * i)

    if (i <= 3) {
        x = tafel + " x " + i + " = " + (tafel * i)

        opvangbak = opvangbak + tafel + " x " + i + " = " + (tafel * i) + ", "
    } else if (3 < i <= 6) {

    }

}


console.log(opvangbak)*/
const tafel = Number(prompt("geef een tafel(getal) in"));
let eindGetal = Number(prompt("Geef een eind getal in:"));
let resultaat ="■ ";
let y=1;
for(let i=1;i<=eindGetal;i++){
    if(y<=eindGetal){
        for(let x=1;x<=3;x++){
            if(y<=eindGetal) {
                resultaat = resultaat + tafel + "x" + y + "=" + tafel * y + ",";
                y++;
            }
        }
        console.log(resultaat.substring(0,resultaat.length-1));
        resultaat="■ ";
    }


}

