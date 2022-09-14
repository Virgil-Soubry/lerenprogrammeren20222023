let yearOfBirth = prompt("What is your birth year?" );
yearOfBirth = Number(yearOfBirth);
// lange notatie
yearOfBirth = yearOfBirth + 1;
//shorthand notatie
yearOfBirth += 1;

console.log(yearOfBirth);

yearOfBirth = "1973geboortejaar";
yearOfBirth = parseInt(yearOfBirth);// parseInt heeft de integer uit string gehaald.
console.log(yearOfBirth);

let x = parseInt("6e2");// parseInt tot aan de eerste  string
console.log(x);

let y = Number("1973");// Number kijkt naar volledige waarde

console.log(isNaN(y));

const pi = 3.14;
console.log(pi);