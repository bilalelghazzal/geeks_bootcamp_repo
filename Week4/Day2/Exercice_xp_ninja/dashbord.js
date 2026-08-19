const readline = require('readline');
const chalk    = require('chalk');
const { getWeather } = require('./weather');

function startDashboard() {
  const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
  });

  // 
  console.log(chalk.bold.blue('║') + chalk.bold.white('  Weather Dashboard     ') + chalk.bold.blue('║'));

  console.log(chalk.gray('  Type a city name to get weather info.'));
  console.log(chalk.gray('  Type "exit" to quit.\n'));

  function askCity() {
    rl.question(chalk.bold.green(' Enter city name: '), async (input) => {
      const city = input.trim();

      if (city.toLowerCase() === 'exit') {
        console.log(chalk.yellow('\n👋 Goodbye! Stay safe out there.\n'));
        rl.close();
        return;
      }

      if (!city) {
        console.log(chalk.red('⚠️  Please enter a valid city name.'));
        askCity();
        return;
      }

      await getWeather(city);
      askCity(); // Loop back for another query
    });
  }

  askCity();
}

module.exports = { startDashboard };