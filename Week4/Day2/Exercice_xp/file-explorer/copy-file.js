const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "source.txt");// == (path.dirname,"source.txt")
const destinationPath = path.join(__dirname, "destination.txt");

fs.readFile(sourcePath, "utf8", (readError, data) => { // callback function (readError,data) func exec after 
  if (readError) {
    console.error("Error reading source.txt:", readError.message); // fail
    return;  // Suecces 
  }


fs.writeFile(destinationPath, data, "utf8", (writeError) => {
    if (writeError) {
      console.error("Error writing destination.txt:", writeError.message);
      return;
    }

    console.log("File copied successfully from source.txt to destination.txt");
  });
});
