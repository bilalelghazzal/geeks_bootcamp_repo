const fs = require('fs');
const path = require('path');

function readFile(filePath, encoding = 'utf8') {
    try {
        const fullPath = path.resolve(filePath);
        const data = fs.readFileSync(fullPath, encoding);
        return data;
    } catch (err) {
        throw err;
    }
}

function writeFile(filePath, content, encoding = 'utf8') {
    try {
        const fullPath = path.resolve(filePath);
        fs.writeFileSync(fullPath, content, { encoding });
    } catch (err) {
        throw err;
    }
}

module.exports = {
    readFile,
    writeFile
};