let i = 0;
let opvangbak = "";

for (i; i <= 99; i++) {
    if (i === 99) {
        opvangbak = opvangbak + i
    } else {
        if (i <= 9) {
            opvangbak = opvangbak + "0" + i + ",";
        } else {
            opvangbak = opvangbak + i + ",";
        }
    }

}
console.log(opvangbak);
