import fs from 'node:fs/promises';
import { checkFileOrFolderExists } from "../util/fsUtils.js";

const remove = async () => {
    const fileToRemove = "./files/fileToRemove.txt";

    if (!await checkFileOrFolderExists(fileToRemove)) {
        throw new Error("FS operation failed");
    }
    
    await fs.unlink(fileToRemove);
};

await remove();