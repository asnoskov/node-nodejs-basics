import fs from 'node:fs/promises';
import { join } from 'node:path';
import { checkFileOrFolderExists } from '../util/fsUtils.js';

const copy = async () => {
    const sourceFolder = "./files";
    const destinationFolder = "./files_copy";

    if (await checkFileOrFolderExists(destinationFolder)) {
        throw new Error("FS operation failed");
    }

    // I assume that we also copy contents of nested folders (if any exist)? Implemented this way.
    const copyFolderWithContents = async (sourceFolder, destinationFolder) => {
        await fs.mkdir(destinationFolder);
        const filesAndFolders = await fs.readdir(sourceFolder);
        for (const fileOrFolder of filesAndFolders) {
            const srcName = join(sourceFolder, fileOrFolder);
            const destName = join(destinationFolder, fileOrFolder);
            const isDirectory = await (await fs.stat(srcName)).isDirectory();
            if (isDirectory) {
                copyFolderWithContents(srcName, destName);
            } else {
                fs.copyFile(srcName, destName);
            }
        }
    }

    await copyFolderWithContents(sourceFolder, destinationFolder);
};

copy();