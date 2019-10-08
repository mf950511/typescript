function getLength(some: string | number): number {
    if((<string>some).length) {
        return (<string>some).length
    } else {
        return some.toString().length
    }
}

console.log(getLength(123))