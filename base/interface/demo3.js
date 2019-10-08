function createSquare(config) {
    var newArea = { color: 'white', area: 100 };
    if (config.color) {
        newArea.color = config.colo;
    }
    if (config.width) {
        newArea.area = config.width * config.width;
    }
    return newArea;
}
var area = createSquare({ color: 'red' });
console.log(area);
