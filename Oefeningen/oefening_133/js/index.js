/*
 Je schrijft 3 arrays. De eerste 2 arrays vul je met een lus op met telkens 11
willekeurige in te lezen getallen.
 De derde array vul je vervolgens op met de de som van de waarden in arrays 1 en 2.
 Weergave op het scherm (voorbeeld):
 3+2 = 5
 1+1 = 2
 2+100 = 102
 3+4 = 7
 900+4 = 904
*/

let array1=[];
let array2=[];
let array3=[];
let x = 0;

maxGetal = Number(prompt("Geef een max getal in"))
while (x<11){
    array1.push(Math.floor(Math.random()*maxGetal));
    array2.push(Math.floor(Math.random()*maxGetal));
    array3.push(array1[x] + array2[x]);
    document.write(`${array1[x]} + ${array2[x]} = ${array3[x]}<br>`);
    x++
}
/*
console.table(array1);
console.table(array2);
console.table(array3);*/
