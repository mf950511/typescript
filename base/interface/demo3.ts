interface squareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: squareConfig): {color: string; area: number}{
    let newArea = { color:'white', area: 100}
    if(config.color) {
        newArea.color = config.color
    }
    if(config.width) {
        newArea.area = config.width * config.width
    }
    return newArea
}

let area = createSquare({color: 'red'})
console.log(area)
