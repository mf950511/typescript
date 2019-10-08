class GenericNumber<T> {
    zeroNumber: T;
    add: (num1: T, num2: T) => T

}

let myGeneric = new GenericNumber<number>()

myGeneric.zeroNumber = 0
myGeneric.add = (num1, num2) => {return num1+num2}
console.log(myGeneric.add(123, 123))