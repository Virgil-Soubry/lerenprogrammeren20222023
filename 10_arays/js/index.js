/** Numerieke arrays**/
let cursist = []; // leeg//
let cursisten = ["Tom", "Tim", "Bart", "Els"];//string array//
let cursistJaar = [2018, 2019, 2020, 2023]; // nummer array//
//let cursusJaar = new Array(2018,2019,2020,2023)//
/*console.log(cursistJaar[1]);
console.log(cursisten);
console.log(cursisten.length);*/
let divresultaat = document.getElementById("resultaat");
divresultaat.innerHTML = cursisten[0];


/** associatiev arrays**/
let leerling = {
    "Voornaam":"Tom",
    "Familienaam":"Vanhoutte",
    "Plaats":"Roeselare",
    "Telefoon":"050112233"
}
console.log(leerling["Naam"])

/**meerdeimensionale arrays**/
let coursTeacher=[
    ["HTML5","Tom Vanhoutte"],
    ["Css3", "Tom Vanhoutte"],
    ["PHP","Tim Vanpimperzele"],
    ["JAVASCRIPT","Nie Moeilijk"]
]
console.log(coursTeacher[2][1])

let familienaam = document.getElementById("familienaam")
familienaam.innerHTML = leerling["Familienaam"];

familienaam.innerHTML+=" " + leerling["Voornaam"]

/**elementen toevoegen aan array **/
cursisten.push("Marieke");
console.log(cursisten);/*einde array toevoegen*/
cursisten.unshift("Thomas");/* begin array toevoegen*/
console.log(cursisten)
cursisten.pop(); /* delete laatste element*/
console.log(cursisten)
cursisten.shift();/* delete eerste element*/
console.log(cursisten)
cursisten.sort();/* sorteren van een array console.log(cursisten)*/
console.log(cursisten);
cursisten.reverse();
console.log(cursisten);

let zin = "full stack developers";
zin.split("");/*uit array word strings gemaakt*/
console.log(zin[0]);
let test = zin.split(" ")
console.log(test[0]);

zin.toUpperCase()
zin.toLowerCase()
zin.toString()

/**arrays en loops**/

for (let i=0;i<cursisten.length;i++){
    console.log(cursisten[i]);
}
let i=0
while (i<cursisten.length){
    console.log(cursisten[i]);
    i++;
}

for (let item in cursisten){
    console.log(item,":",cursisten[item]);
}

cursisten.forEach(mijnFunctie)

function mijnFunctie(value, index){
    console.log(index,":", value);
}
let getal1 = Number(prompt("Geef een getal in"))
let getal2=  Number(prompt("Geef een getal in"))

function som(a,b){
    return a+b;
}
let resultaat= som(getal1,getal2);
console.log(resultaat)

function product(a,b){
    return a*b;
}
let resultaat2= product(getal1,getal2);
console.log(resultaat2)





let number =[1,2,3,4,5];
let multiply= number.map(x=>x*2);
console.log(multiply);