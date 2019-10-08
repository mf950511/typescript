interface Shape {
    color: string;
}
interface PenStroke {
    penLength: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}


let square = <Square>{}

square.color = 'blue'
square.sideLength = 10
square.penLength = 4