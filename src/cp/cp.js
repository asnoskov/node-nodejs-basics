import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const fileName = "./files/script.js";

    const myChildProcess = fork(fileName, process.argv);
};

spawnChildProcess();