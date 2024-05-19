// Step 1: Import the fs module
const fs = require('fs');

// Step 2: Use readFile to read the content of user.json
fs.readFile('user.json', (error, data) => {
    // Step 3: parse the JSON string to an object
    let read = JSON.parse(data);
    // Step 4: access products array from JSON data
    let arr = read.products;
    // Step 5: Filtering objects that include vehicle as type
    let drive = arr.filter(e => e.type.includes("vehicle"));
    // Step 6: Printing their names
    drive.forEach(x => console.log(x.name));
});
