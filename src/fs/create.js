import fs from 'node:fs/promises';
import { stdout } from 'node:process';
import { checkFileOrFolderExists } from '../util/fsUtils.js';

const create = async () => {
    const contentToSave = "I am fresh and young";
    const filePath = "./files/fresh.txt";

    if (await checkFileOrFolderExists(filePath)) {
        throw new Error("FS operation failed");
    }
    
    await fs.writeFile(filePath, contentToSave);
};

await create();