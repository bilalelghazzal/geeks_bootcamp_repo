
const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];
  
  
  let sumLoop = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 'dog') {
      sumLoop += data[i].age * 7;
    }
  }
  console.log('for loop sum human year :', sumLoop); // 154
  
//
  const sumReduce = data.reduce((acc, animal) => {
    if (animal.type === 'dog') {
      acc += animal.age * 7;
    }
    return acc;
  }, 0);
  console.log('Ex1 reduce() sum (human years):', sumReduce); // 154
  
  

  // Exe 2
 
  
  const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
  
  const cleanEmail = userEmail3.trim();
  console.log('Ex2 – clean email:', cleanEmail);

  // Exercise 3: Employees – restructure array into object

  
  const users = [
    { firstName: 'Bradley',  lastName: 'Bouley',   role: 'Full Stack Resident' },
    { firstName: 'Chloe',    lastName: 'Alnaji',   role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn',   role: 'Enterprise Instructor' },
    { firstName: 'Michael',  lastName: 'Herman',   role: 'Lead Instructor' },
    { firstName: 'Robert',   lastName: 'Hajek',    role: 'Full Stack Resident' },
    { firstName: 'Wes',      lastName: 'Reid',     role: 'Instructor' },
    { firstName: 'Zach',     lastName: 'Klabunde', role: 'Instructor' },
  ];
  
  const restructured = {};
  users.forEach(user => {
    const fullName = `${user.firstName} ${user.lastName}`;
    restructured[fullName] = user.role;
  });
  console.log('Ex3 – restructured users:', restructured);

  // Exercise 4

  const letters = ['x', 'y', 'z', 'z'];
  

  const resultLoop = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (resultLoop[letter]) {
      resultLoop[letter]++;
    } else {
      resultLoop[letter] = 1;
    }
  }
  console.log('Ex4 – for loop:', resultLoop); // { x: 1, y: 1, z: 2 }
  

  const resultReduce = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});
  console.log('Ex4 – reduce():', resultReduce); // { x: 1, y: 1, z: 2 }