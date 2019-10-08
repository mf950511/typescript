interface SearchFunction<T> {
    (length: number, value: T): Array<T>
}

let createArray: SearchFunction<any>
createArray = function<T>(length: number, value: T): Array<T>{
    let result = []
    for(let i = 0 ; i < length; i++) {
        result[i] = value
    }
    return result
}

let a = createArray(8, '123')
console.log(a)