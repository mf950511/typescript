let a: number[] = [1,2,3,4]
let b: ReadonlyArray<number> = a
// b[0] = 12
// b.push(123)
// b.length = 100
a = b as number[]
