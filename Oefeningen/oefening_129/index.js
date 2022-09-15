let gevraagd = Number(prompt("Voer een getal in:"));


for (let i = 1; i < gevraagd; i++) {
    var count = 0;
    for (let x = 1; x <= i; x++) {
        if (i % x === 0) {
            count++
        }
    }
    if (count === 2) {
        console.log(i)
    }
}


//y % y === 0;