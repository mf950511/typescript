function copyFields<T extends U, U>(target: T, source: U): T {
    for(let id in source) {
        target[id] = (<T>source)[id]
    }
    return target
}

let x = { a: 1, b: 2, c: 3, d: 4 }

let a = copyFields(x, {b: 14, d: 15})
console.log(a)