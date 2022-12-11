import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const sourcePath = "./files/fileToCompress.txt";
    const destinationPath = "./files/archive.gz";
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    await pipeline(source, gzip, destination);
};

await compress();