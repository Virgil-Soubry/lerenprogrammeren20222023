let lijnen = Number(prompt("Geef een even aantal lijnen in"));
let ster = "*";
let i = 1
let x = 5
for (i; i <= lijnen/2; i++) {
    console.log(ster);
    ster = ster + "*";

}
for (x; x <= lijnen; x++) {
    console.log(ster);
    ster = ster - "*";

}