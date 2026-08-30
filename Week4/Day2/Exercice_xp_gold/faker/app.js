const { users, addFakeUser } = require('./users');

// Ajouter 3 utilis
addFakeUser();
addFakeUser();
addFakeUser();

console.log('\nAll users:', users);

// exec 

/**
 * npm install @faker-js/faker
node app.js
 */