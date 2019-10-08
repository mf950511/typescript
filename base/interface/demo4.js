function createSquare(config) {
    var newArea = { color: 'white', area: 100 };
    if (config.color) {
        newArea.color = config.color;
    }
    if (config.width) {
        newArea.area = config.width * config.width;
    }
    return newArea;
}
// 断言绕开额外类型检查
// let area = createSquare({colour: 'red', width: 100} as squareConfig)
var myObj = { colour: 'red', width: 100 };
var area = createSquare(myObj);
