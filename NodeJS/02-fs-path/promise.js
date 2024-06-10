import fs from "fs/promises";

let a = await fs.writeFile("./NodeJS/02-fs-path/harry.txt", "this is good");

let c = await fs.appendFile("./NodeJS/02-fs-path/harry.txt", "\nAh that's good!");

let b = await fs.readFile("./NodeJS/02-fs-path/harry.txt");
console.log(b.toString());