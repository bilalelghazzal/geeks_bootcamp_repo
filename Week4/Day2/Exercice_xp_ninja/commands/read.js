const fs   = require('fs');
const path = require('path');
const chalk = require('chalk');

function readFile(filePath) {
  try {
    const absolutePath = path.resolve(filePath);

    if (!fs.existsSync(absolutePath)) {
      console.log(chalk.red(`File not found: ${absolutePath}`));
      return;
    }

    const content = fs.readFileSync(absolutePath, 'utf-8');
    const stats   = fs.statSync(absolutePath);

    console.log(chalk.bold.green('\n📄 File Information:'));
    console.log(chalk.cyan('Path:  ') + absolutePath);
    console.log(chalk.cyan('Size:  ') + stats.size + ' bytes');
    console.log(chalk.cyan('Modified: ') + stats.mtime.toLocaleString());
    console.log(chalk.bold.yellow('\n────────────────────────\n'));
    console.log(chalk.white(content));
    console.log(chalk.bold.yellow('──────────────────────────'));
  } catch (error) {
    console.error(chalk.red('Error reading file:'), error.message);
  }
}

module.exports = { readFile };