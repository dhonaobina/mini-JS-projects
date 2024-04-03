let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
console.log('ROLE AND NAME OF CREW')
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
console.log('')
console.log('NAME OF CREW AND DEGREE');
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name} : ${spaceship.crew[crewMember].degree}`);
}
console.log('')
console.log('DEGREE ONLY');
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].degree}`)
}
