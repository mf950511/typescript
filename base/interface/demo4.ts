
interface squareConfig {
    color?: string;
    width?: number;
    //[propName: string]: any //设置字符串索引签名绕过额外类型检查
}

function createSquare(config: squareConfig): {color: string; area: number}{
    let newArea = {color: 'white', area: 100}
    if(config.color){
        newArea.color = config.color
    }
    if(config.width) {
        newArea.area = config.width * config.width
    }
    return newArea
}
// 断言绕开额外类型检查
// let area = createSquare({colour: 'red', width: 100} as squareConfig)

let myObj = {colour: 'red', width: 100}

let area = createSquare(myObj)