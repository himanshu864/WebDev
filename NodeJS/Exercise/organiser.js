import fs from "fs";
import promises from "fs/promises";
import { extname, join } from "path";

const root = "./NodeJS/Exercise/";
const clutterDir = join(root, "Clutter");
const sortedDir = join(root, "Sorted");

const files = await promises.readdir(clutterDir);

// Ensure the Sorted directory exists
if (!fs.existsSync(sortedDir)) {
    await promises.mkdir(sortedDir);
}

for (const file of files) {
    const extension = extname(file).slice(1); // Remove leading dot
    const folder = join(sortedDir, extension);

    // Ensure the folder for this extension exists
    if (!fs.existsSync(folder)) {
        await promises.mkdir(folder);
    }

    // Copy file to the appropriate folder
    await promises.copyFile(join(clutterDir, file), join(folder, file));
}

console.log("Files sorted successfully.");