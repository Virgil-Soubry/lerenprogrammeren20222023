let eersteGetal = Number(prompt('Geef eerste getal in'));
let tweedeGetal = Number(prompt('Geef tweede getal in'));
let grootsteGemeneDeler;

for(let x=1;x<=eersteGetal;x++){
    if(eersteGetal%x === 0 && tweedeGetal%x === 0){
        grootsteGemeneDeler = x;
    }
}

console.log(grootsteGemeneDeler);