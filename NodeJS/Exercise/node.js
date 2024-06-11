import path from "path";
import fs from "fs";
import promises from "fs/promises";

const root = "./NodeJS/Exercise";
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

