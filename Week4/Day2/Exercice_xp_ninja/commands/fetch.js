const axios = require('axios');
const chalk = require('chalk');

async function fetchData() {
  try {
    console.log(chalk.yellow('Fetching latest posts'));

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = response.data;

    console.log(chalk.bold.green('\nLatest Posts:\n'));

    posts.forEach((post, index) => {
      console.log(chalk.cyan(`[${index + 1}] `) + chalk.bold(post.title));
      console.log(chalk.gray(`    ${post.body.slice(0, 80)}...`));
      console.log();
    });
  } catch (error) {
    console.error(chalk.red(' Error fetching data:'), error.message);
  }
}

module.exports = { fetchData };