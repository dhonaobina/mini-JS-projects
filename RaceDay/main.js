let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if(early && age > 18){
  raceNumber += 1000;
}
if(early && age > 18){
  console.log(`Race begins at 9:30 am, your race number is: ${raceNumber}.`);
}
else if(!early && age > 18){
  console.log(`Race begins at 11:00 am, your race number is ${raceNumber}.`);
}
else if(age < 18){
  console.log(`Race begins at 12:30 pm, your race number is ${raceNumber}.`);
}
else {
  console.log('Please approach the registration desk, thanks!');
}