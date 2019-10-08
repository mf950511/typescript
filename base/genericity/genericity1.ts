function createArray<T>(length: number, value: T): Array<T> {
    let result: Array<T> = []
    for(let i = 0;i < length; i++) {
        result[i] = value
    }
    return result
}

let a = createArray(3, '123')
console.log(a)
