const fs = require('fs');

fs.readData('file-data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

module.exports=readData