interface labelInter {
    label: string;
    size?: number
}
function printLabel(labelledObj: labelInter){
    console.log(labelledObj.label)
}

let myObj = {
    size1: 10,
    label: '我是label'
}

printLabel(myObj)