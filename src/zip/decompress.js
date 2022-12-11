import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const sourcePath = "./files/archive.gz";
    const destinationPath = "./files/fileToCompress.txt";
    const gUnzip = createGunzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    await pipeline(source, gUnzip, destination);
};

await decompress();