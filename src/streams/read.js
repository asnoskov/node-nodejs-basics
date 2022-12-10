import fs from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const fileName = "./files/fileToRead.txt";
    const fileAsReadable = fs.createReadStream(fileName);

    fileAsReadable.pipe(stdout)
};

await read();