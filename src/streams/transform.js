import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';


const transform = async () => {
    const reverseString = (string) => string.split('').reverse().join('');

    const reverseTransform = new Transform({
        transform: (chunk, encoding, callback) => {
            callback(null, reverseString(chunk.toString()));
        }
    });

    await pipeline(stdin, reverseTransform, stdout);
};

await transform();