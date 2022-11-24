/*1*/
/*Instantie van object*/
/*
let persoonA = new Object();
persoonA.naam = "Virgil";
persoonA.geboortedatum = "2000";
persoonA.geslacht = "m";

console.log(persoonA);

let persoonB = new Object();
persoonB.naam = "Virgil";
persoonB.geboortedatum = "2000";
persoonB.geslacht = "m";

console.log(persoonB);*/

/*2*/
/*Constructor met methodes*/
/*
let Persoon = function (naam,geboortedatum,geslacht){
    this.naam = naam;
    this.geboortedatum = geboortedatum;
    this.geslacht = geslacht;
}
Persoon.prototype.berekenLeeftijd =function (){
    const d = new Date();
    let year = d.getFullYear();
    return year-this.geboortedatum
}

let persoonA = new Persoon("Virgil",2000,"M");
let persoonB = new Persoon("Tom",1973,"M");
console.log(persoonA);
console.log(persoonA.naam);
console.log(persoonB.berekenLeeftijd())*/

/*3*/
/*Classes*/
class Persoon{
    constructor(naam,geboortedatum,geslacht){
        this.naam = naam;
        this.geboortedatum = geboortedatum;
        this.geslacht = geslacht;
    }
   /* berekenLeeftijd =function (){
        const d = new Date();
        let year = d.getFullYear();
        return year-this.geboortedatum
    }*/
    present(){
        return `Ik ben een ${this.geslacht} en mijn naam is ${this.naam}`
    }
}
persoonA = new Persoon("Tom",1973, "Man")
console.log(persoonA.present())

class Werknemer extends Persoon{
    constructor(naam,geboortedatum,geslacht,soort) {
        super(naam,geboortedatum,geslacht);
        this.soort = soort;
    }
    show(){
        return this.present() + ` en ik ben een ${this.soort}`
    }
}
persoonB = new Werknemer("Virgil",2000,"Man","bediende")
console.log(persoonB.show())
