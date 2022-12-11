import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    let res;
    try {
        const fibonacci = nthFibonacci(workerData.n);
        res = {
            status: 'resolved',
            data: fibonacci
        }
    }
    catch {
        res = {
            status: 'error'
        }
    }

    parentPort.postMessage(res);
};

sendResult();