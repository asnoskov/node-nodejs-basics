import fs from 'node:fs/promises';
import { checkFileOrFolderExists } from "../util/fsUtils.js";

const rename = async () => {
    const wrongFileName = "./files/wrongFilename.txt";
    const properFileName = "./files/properFilename.md";

    if ((!await checkFileOrFolderExists(wrongFileName))
        || await checkFileOrFolderExists(properFileName)
    ) {
        throw new Error("FS operation failed");
    }
    
    await fs.rename(wrongFileName, properFileName);
};

await rename();