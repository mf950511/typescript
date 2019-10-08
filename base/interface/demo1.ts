function printLabel(labelledObj: {label: string}){
    console.log(labelledObj.label)
}

let myObj = {
    label: '我是label',
    size: 10
}

printLabel(myObj)