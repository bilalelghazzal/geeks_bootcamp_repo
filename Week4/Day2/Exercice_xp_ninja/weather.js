const axios = require('axios');
const chalk = require('chalk');

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
  try {
    console.log(chalk.yellow(`\n Fetching weather for "${city}"...`));

    const response = await axios.get(BASE_URL, {
      params: {
        q: API_KEY,
        appid: API_KEY,
        units: 'metric',
        lang: 'en',
      },
    });

    const data = response.data;

    // ── Extract info ──────────────────────────────────────
    const cityName    = data.name;
    const country     = data.sys.country;
    const temp        = data.main.temp;
    const feelsLike   = data.main.feels_like;
    const humidity    = data.main.humidity;
    const description = data.weather[0].description;
    const windSpeed   = data.wind.speed;
    const icon        = getWeatherIcon(data.weather[0].main);

    // ── Display ───────────────────────────────────────────
    console.log(chalk.bold.cyan('│') + chalk.bold.white(`  ${icon}  Weather in ${cityName}, ${country}`) + chalk.bold.cyan('  │'));
    console.log(chalk.bold.cyan('│') + chalk.yellow(`    Temperature : `) + chalk.bold.white(`${temp}°C`) + chalk.bold.cyan('                │'));
    console.log(chalk.bold.cyan('│') + chalk.yellow(`   Feels like  : `) + chalk.bold.white(`${feelsLike}°C`) + chalk.bold.cyan('                │'));
    console.log(chalk.bold.cyan('│') + chalk.yellow(`   Humidity    : `) + chalk.bold.white(`${humidity}%`) + chalk.bold.cyan('                 │'));
    console.log(chalk.bold.cyan('│') + chalk.yellow(`    Wind speed  : `) + chalk.bold.white(`${windSpeed} m/s`) + chalk.bold.cyan('              │'));
    console.log(chalk.bold.cyan('│') + chalk.yellow(`  Condition   : `) + chalk.bold.white(`${description}`) + chalk.bold.cyan('        │'));


  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(chalk.red(`\nCity "${city}" not found. Please check the spelling.\n`));
    } else if (error.response && error.response.status === 401) {
      console.log(chalk.red('\n Invalid API key. Please check your key in weather.js\n'));
    } else {
      console.error(chalk.red('Error:'), error.message);
    }
  }
}

module.exports = { getWeather };