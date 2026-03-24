const { readFile, writeFile } = require("./fileManager");

const data = readFile("Hello Word.txt");
console.log("File content:", data);

writeFile("Bye Word.txt", "Writing to the file");
console.log("Content written successfully");

