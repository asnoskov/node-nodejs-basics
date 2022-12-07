const parseArgs = () => {
    const argPrefix = "--";

    const argsPairsUnparsed = process.argv
        .filter(key => key.startsWith(argPrefix));

    const argsParsed = argsPairsUnparsed
        .map(unparsedArg => {
            const withoutPrefix = unparsedArg.slice(2);
            const keyAndValSplitted = withoutPrefix.split("=");
            return { key: keyAndValSplitted[0], val: keyAndValSplitted[1] };
        })

    const messageForConsole = argsParsed
        .map(arg => `${arg.key} is ${arg.val}`)
        .join(", ");

    console.log(messageForConsole);
};

parseArgs();