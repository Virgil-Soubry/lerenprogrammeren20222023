let aantal = Number(prompt("Geef het aantal namen in dat je wenst"));
let naamarray = [];
x = 0

while (x < aantal) {
    naamarray.push(prompt("Geef een naam in"));
    if (x % 2) {
        document.write(naamarray[x])
    } else {
        document.write(`damn ${naamarray[x]}\n`)
    }
x++
}

