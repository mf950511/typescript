function sum(arr: any[], ...rest: any[]): any[] {
    rest.forEach(item => {
        arr.push(item)
    })
    return arr
}

let a: any[] = []
console.log(sum(a, 2,3,4))