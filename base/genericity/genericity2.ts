interface Lengthwise {
    length: number;
}

function loggingIdentify<T extends Lengthwise> (args: T): T{
    console.log(args.length)
    return args
}

loggingIdentify('123')