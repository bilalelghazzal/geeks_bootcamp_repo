const { Command } = require('commander');
const { greet }    = require('./commands/greet');
const { fetchData } = require('./commands/fetch');
const { readFile }  = require('./commands/read');

const program = new Command();

program
  .name('ninja-utility')
  .description('A powerful command-line utility built with Node.js')
  .version('1.0.0');

program
  .command('greet')
  .description('Display a colorful greeting message')
  .option('-n, --name <name>', 'Your name', 'Ninja')
  .action((options) => {
    greet(options.name);
  });

program
  .command('fetch')
  .description('Fetch and display data from a public API')
  .action(async () => {
    await fetchData();
  });


program
  .command('read')
  .description('Read and display the content of a file')
  .argument('<filepath>', 'Path to the file you want to read')
  .action((filepath) => {
    readFile(filepath);
  });

program.parse(process.argv);