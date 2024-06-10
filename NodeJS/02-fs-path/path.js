import path from "path";

// console.log(path);

const myPath = "/home/artoriax/WebDev/NodeJS/02-fs-path/harry.txt";

console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));

// console.log(path.join("/home/sef", "sad\\asdf.txt"));