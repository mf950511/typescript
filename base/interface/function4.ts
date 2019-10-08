function add(num1: number, num2?: number) {
    return num1 + num2
}

add(1, 4)

function sum(num1: number, num2:number = 0) {
    return num1 + num2
}
sum(1)