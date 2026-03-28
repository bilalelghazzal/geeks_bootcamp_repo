// EXEc 5
function returnNumbers(str) {
    const matches = str.match(/\d/g);
    if (!matches) return '';
    return matches.join('');
  }
  
  // Test
  console.log(returnNumbers('k5k3q2g5z6x9bn'));



  // Exerc 6

  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validateFullName(name) {
  // Règles :
  // - lettre unique
  // - Un espc prenom nom
  // - first lettre en gras 
  const regex = /^[A-ZÀÂÄÉÈÊËÎÏÔÙÛÜ][a-zàâäéèêëîïôùûü]+ [A-ZÀÂÄÉÈÊËÎÏÔÙÛÜ][a-zàâäéèêëîïôùûü]+$/;
  return regex.test(name);
}

rl.question('Enter your full name :  ', (answer) => {
  if (validateFullName(answer)) {
    console.log(`✅ "${answer}" is a valid full name.`);
  } else {
    console.log(` "${answer}" is invalid`);
  }
  rl.close();
});










