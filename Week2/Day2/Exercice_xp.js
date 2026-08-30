const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display with order
colors.forEach(function(color, index) {
    console.log(`${index + 1}# choice is ${color}.`);
});

// 2. Check if "Violet" exists
const hasViolet = colors.some(function(color) {
    return color === "Violet";
});
hasViolet ? console.log("Yeah") : console.log("No...");


const ordinal = ["th", "st", "nd", "rd"];

colors.forEach(function(color, index) {
    const num    = index + 1;
    // Special logic for ordinal suffix for 1st, 2nd, 3rd only
    let suffix;
    if (num % 100 >= 11 && num % 100 <= 13) {
        suffix = "th";
    } else if (ordinal[num % 10]) {
        suffix = ordinal[num % 10];
    } else {
        suffix = "th";
    }
    console.log(`${num}${suffix} choice is ${color}.`);
});

// ---- 1 ----
const fruits     = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result     = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);


// ---- 2 ----
const country = "USA";
console.log([...country]);
let newArray = [...[,,]];
console.log(newArray);


const users = [
    { firstName: 'Bradley', lastName: 'Bouley',   role: 'Full Stack Resident' },
    { firstName: 'Chloe',   lastName: 'Alnaji',   role: 'Full Stack Resident' },
    { firstName: 'Jonathan',lastName: 'Baughn',   role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman',   role: 'Lead Instructor' },
    { firstName: 'Robert',  lastName: 'Hajek',    role: 'Full Stack Resident' },
    { firstName: 'Wes',     lastName: 'Reid',     role: 'Instructor' },
    { firstName: 'Zach',    lastName: 'Klabunde', role: 'Instructor' }
  ];
  
  // 1. Welcome message
  const welcomeStudents = users.map(function(user) {
      return `Hello ${user.firstName}`;
  });
  console.log(welcomeStudents);
  
  // 2. Filter Full Stack Residents
  const fullStackResidents = users.filter(function(user) {
      return user.role === "Full Stack Resident";
  });
  console.log(fullStackResidents);
  
  // 3. Bonus — only lastNames of Full Stack Residents
  const lastNames = users
      .filter(function(user)  { return user.role === "Full Stack Resident"; })
      .map(function(user)     { return user.lastName; });
  console.log(lastNames);
  // → ["Bouley", "Alnaji", "Hajek"]


  const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce(function(acc, word) {
    return acc + " " + word;
});
console.log(sentence);
// → "a long time ago in a galaxy far far away"

const students = [
    { name: "Ray",      course: "Computer Science",        isPassed: true  },
    { name: "Liam",     course: "Computer Science",        isPassed: false },
    { name: "Jenner",   course: "Information Technology",  isPassed: true  },
    { name: "Marco",    course: "Robotics",                isPassed: true  },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie",    course: "Big Data",                isPassed: false }
  ];
  
  // 1. Students who passed
  const passed = students.filter(function(student) {
      return student.isPassed === true;
  });
  console.log(passed);
  
  // 2. Bonus — congratulate each one
  students
      .filter(function(student)  { return student.isPassed; })
      .forEach(function(student) {
          console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
      });