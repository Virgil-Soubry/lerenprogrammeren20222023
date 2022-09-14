/**
 * while(conditie)
 * code
 * Do // niet verplicht in java wel andere programma
 * -----------------
 * Do // wel verplicht
 * code
 * while(conditie)
 *
 * **/
let text = "";      // locatie van de teller is ook van belang
let i = 0;
while (i <= 10) {
    text = text + i + " ";
    i++;


}
console.log(text);

let text2 = "";
let x = 0;
do {
    text2 = text2 + x + " ";
    x++;
} while (x <= 10);
console.log(text);