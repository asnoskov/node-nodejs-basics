import fs from 'node:fs/promises';
import { stdout } from 'node:process';

const create = async () => {
    const contentToSave = "I am fresh and young";
    const filePath = "./files/fresh.txt";

    stdout.write(process.cwd());

    let isFileExists;
    try {
        await fs.access(filePath, fs.constants.F_OK);
        isFileExists = true;
    }
    catch { }
    
    if (isFileExists) {
        throw new Error("FS operation failed");
    }
    
    await fs.writeFile(filePath, contentToSave);
};

await create();