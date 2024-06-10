// const fs = require("fs"); // commonjs
import fs from "fs"; // module

// console.log(fs);

// fs.writeFileSync("himanshu.txt", "Himanshu joined as an intern!");

console.log("start");

fs.writeFile("./NodeJS/02-fs-path/himanshu.txt", "Himanshu joined as an intern!", () => {
    console.log("done");

    fs.readFile("./NodeJS/02-fs-path/himanshu.txt", (error, data) => {
        console.log(error, data.toString());
    });

    fs.appendFile("./NodeJS/02-fs-path/himanshu.txt", "\nand he's doing great", (e, d) => {
        console.log(d);
    })
});

console.log("end");
