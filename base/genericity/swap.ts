function swap<T, U>(tuple: [T, U]): [U, T]{
    return [tuple[1], tuple[0]]
}

let a = swap([123, '7'])
console.log(a)