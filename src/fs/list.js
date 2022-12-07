import fs from 'node:fs/promises';
import { checkFileOrFolderExists } from "../util/fsUtils.js";

const list = async () => {
    const folderPath = "./files";

    if (!await checkFileOrFolderExists(folderPath)) {
        throw new Error("FS operation failed");
    }

    const files = await fs.readdir(folderPath);
    console.log("list of files:")
    for (const file of files) {
        console.log(file);
    }
};

await list();