let breukTeller=0;
let eersteGetal=Number(prompt('Eerste getal'));
let tweedeGetal=Number(prompt('Tweede getal'));
let grootsteGemeneDeler = 0;
let kleinsteGemeenVeelvoud = 0;

breukTeller = eersteGetal * tweedeGetal;
for(let x=1; x <=eersteGetal;x++){
    if(eersteGetal%x == 0 && tweedeGetal%x ==0){
        grootsteGemeneDeler = x;
    }
}
kleinsteGemeenVeelvoud = breukTeller/grootsteGemeneDeler;
console.log(kleinsteGemeenVeelvoud)