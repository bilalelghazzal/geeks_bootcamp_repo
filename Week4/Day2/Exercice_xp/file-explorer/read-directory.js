const fs = require("fs");
const path = require("path");

const directoryPath = __dirname;

fs.readdir(directoryPath, (error, files) => {
  if (error) {
    console.error("Error reading directory:", error.message);
    return;
  }

  console.log(`Files in ${path.basename(directoryPath)}:`);
  files.forEach((fileName) => console.log(fileName));
});
