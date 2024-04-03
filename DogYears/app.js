// value of my age
const myAge = 35;
// value of early years
let earlyYears = 2;
earlyYears *= 10.5;
//value of later years
let laterYears = myAge - 2;
//value of number of dog years
laterYears *= 4;
console.log(earlyYears + " & " + laterYears);
var myAgeInDogYears = earlyYears + laterYears;
// my name in lower case
let myName = "DHONA";
myName = myName.toLowerCase()
console.log(myName);
//my age converted to dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);