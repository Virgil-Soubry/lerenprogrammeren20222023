// 1
/* alert(document.body.innerHTML);
alert(document.documentElement.innerHTML); */

// 2
/*
document.getElementById("p02").innerHTML=document.getElementById("h101").firstChild.nodeValue*/

// 3
/*document.body.onload = addElement;
function addElement(){
    // nieuwe div creëren met property createElement
    var newDiv = document.createElement("div");
    // toevoegen van tekst aan nieuwe div
    var newContent = document.createTextNode("Hallo, Full stack!");
    // voeg de tekst toe aan de nieuwe div
    newDiv.appendChild(newContent);
    // voeg de div VOOR de reeds bestaande div toe in de DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv,currentDiv);
}*/

// 4
/*
document.write("Hallo iedereen");
document.write("klaar");

document.writeln("Hallo iedereen");
document.writeln("klaar");

document.write("\t\thallo\nWorld\n")
document.writeln("\"Hallo, iedereen welkom.\"\n");
document.writeln("smiley face:\&#128153;\n");*/
let cursisten = ["Tom", "Tim", "Bart", "Els"];

var newUl = document.createElement("ul");
document.body.appendChild(newUl);
for (let index in cursisten){
    var newli = document.createElement("li")
    newUl.appendChild(newli);
    newli.innerHTML = newli.innerHTML + cursisten[index]
}

