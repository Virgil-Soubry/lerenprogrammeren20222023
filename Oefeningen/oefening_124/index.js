let ingaveGetal = Number(prompt("Vul een getal in"));

let faculteit = 1
for (let i = 1; i <= ingaveGetal; i++) {
    faculteit *= i;                         // faculteit = faculteit * i

}
console.log(faculteit);