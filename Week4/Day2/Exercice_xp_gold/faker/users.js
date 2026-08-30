const { faker } = require('@faker-js/faker');

const users = [];

function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    street: faker.location.streetAddress(),
    country: faker.location.country(),
  };
  users.push(user);
  console.log('Fake user added:', user);
}

module.exports = { users, addFakeUser };