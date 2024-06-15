import path, { extname } from "path";
import fs from "fs";
import promises from "fs/promises";

const root = "./NodeJS/03-Declutter";
const newFile = "/logs.txt";

// create file in root directory
await promises.writeFile(root + newFile, "It works!");

// find out extention name of file, and save it's path as folder
const folderPath = root + `/${path.extname(root + newFile)}`;

// to create organised folder if doesn't exists;
if (!fs.existsSync(folderPath))
    await promises.mkdir(folderPath, () => { });

// to copy file from parent to organized folder
await promises.copyFile(root + newFile, folderPath + newFile);

// read content of a directory
const files = await promises.readdir(root + "/Clutter");
for (const file of files) {
    console.log(extname(file));
}

// delete files
fs.unlinkSync(root + '/temp.txt');

// create directories recursively
fs.mkdirSync(root + "/a/b/c", { recursive: true });
