interface stringArray {
    [index: number]: string;
}

let myArray: stringArray = ['Bob', 'Gary']

let myString: string = myArray[0]
console.log(myString)