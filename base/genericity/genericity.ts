function createArray(length: number, value: any): Array<any> {
    let arr: Array<any> = []
    for(let i = 0;i < length; i++) {
        arr[i] = value
    }
    return arr
}

let a: Array<any> = createArray(3, 'x')
console.log(a)