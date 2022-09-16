let som = 0;
let x = Number(prompt('Geef een getal in, stop met een negatief getal'));
while(x >0){
    som += x;
    x = Number(prompt('Geef een getal in, stop met een negatief getal'));
}
console.log(som);