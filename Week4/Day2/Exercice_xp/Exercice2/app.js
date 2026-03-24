const persons = require('./data.js');

function calculateAverageAge(personsArray) {
  if (!personsArray || personsArray.length === 0) {
    console.log('No persons in the array.');
    return;
  }
  const totalAge = personsArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personsArray.length;
  console.log(`The average age is: ${averageAge}`);
}

calculateAverageAge(persons);