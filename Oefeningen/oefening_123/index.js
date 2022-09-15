const lijnen = Number(prompt("Geef een even aantal lijnen in"));
const helft = lijnen / 2;
let ster = "*";
let i = 1;

for (i; i <= helft; i++) {
    console.log(ster);
    ster = ster + "*";
}
ster = ster.substring(0, ster.length - 1);
for (let i = 1; i <= helft; i++) {
    console.log(ster);
    ster = ster.substring(0, ster.length - 1);
}
