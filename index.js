var stringOne = "James er on top"

console.log(stringOne.charAt(10))

console.log(stringOne.split(" "))

// Spørsmål 3

var tekst = "MOM"

var reversTekst = tekst.split("").reverse().join("");

console.log(reversTekst);

if (tekst == reversTekst) {
    console.log("Teksten er PALINDROM");
} else {
    console.log("Teksten er IKKE PALINDROM");
}

//oppgave 4
// sort
var sortMethods = "simen"
console.log(sortMethods.split("").sort().join(""));

//oppgave 5
console.log(stringOne.length);