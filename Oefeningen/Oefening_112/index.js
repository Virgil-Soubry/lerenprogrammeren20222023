let age = Number(prompt("Vul je leeftijd in:"));

if (age >= 18){
    console.log("U bent", leeftijd, "jaar, je mag deelnemen aan de spelen van de Nationale Loterij.");
    let aantalVakjes = Number(prompt("volledig bulletin?, tik 12 anders tik 10, 8, 6, 4 of 2 in"));
    if (aantalVakjes === 12){console.log("20 euro AUB");
    }else if (aantalVakjes === 10 ){
        console.log("18 euro AUB");
    }else if (aantalVakjes === 8 ){
        console.log("16 euro AUB");
    }else if (aantalVakjes === 6 ){
        console.log("12 euro AUB");
    }else if (aantalVakjes === 4 ){
        console.log("8 euro AUB");
    }else{
        console.log("4 euro AUB")}

}else{console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn");
}
