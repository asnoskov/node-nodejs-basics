const parseEnv = () => {
    const prefix = "RSS_";

    const keysWithPrefix = Object.keys(process.env)
        .filter(key => key.startsWith(prefix));
    const messageForConsole = keysWithPrefix
        .map(key => `${key}=${process.env[key]}`)
        .join("; ");

    console.log(messageForConsole);
};

parseEnv();