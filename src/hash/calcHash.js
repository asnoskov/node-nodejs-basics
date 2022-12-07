import fs from 'node:fs/promises';
import crypto from 'node:crypto';

const calculateHash = async () => {
    const fileName = "./files/fileToCalculateHashFor.txt";

    const fileBuffer = await fs.readFile(fileName);
    const hashAsHex = crypto
        .createHash('sha256')
        .update(fileBuffer)
        .digest('hex');

    console.log(hashAsHex);
};

await calculateHash();