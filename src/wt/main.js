import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
    const threadCount = os.cpus().length;
    const workerFileName = "./worker.js";

    const results = [];
    const threads = new Set();
    for (let n = 0; n < threadCount; n++) {
        threads.add(new Worker(workerFileName, { workerData: { n } }));
    }
    for (let worker of threads) {
        worker.on('error', (err) => { throw err; });
        worker.on('message', (msg) => {
            results.push(msg);
            threads.delete(worker);
            if (threads.size == 0) {
                console.log(results.map(r => JSON.stringify(r)).join('\n'));
            }
        });
    }
};

await performCalculations();