import fs from 'node:fs';
import { stdin, stdout } from 'node:process';

const write = async () => {
    const fileName = "./files/fileToWrite.txt";
    const fileAsWritable = fs.createWriteStream(fileName);

    stdin.pipe(fileAsWritable);
};

await write();