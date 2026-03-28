const chalk = require('chalk');

function greet(name = 'Ninja') {
  console.log(chalk.bold.cyan('___________>'));
  console.log(chalk.bold.cyan('') + chalk.bold.yellow(`   Hello, ${name}`));
  console.log(chalk.bold.cyan('___________>'));
  console.log(chalk.green('Welcome to the Ninja Utility! 🥷'));
  console.log(chalk.magenta('Your command-line companion is ready.'));
}

module.exports = { greet };