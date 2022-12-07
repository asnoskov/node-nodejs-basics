import fs from 'node:fs/promises';
import { checkFileOrFolderExists } from "../util/fsUtils.js";

const read = async () => {
    const fileNameToRead = "./files/fileToRead.txt";
    const encoding = "utf-8";

    if (!await checkFileOrFolderExists(fileNameToRead)) {
        throw new Error("FS operation failed");
    }

    const file = await fs.open(fileNameToRead);
    const fileContent = await file.readFile({ encoding });

    console.log(fileContent);
};

await read();