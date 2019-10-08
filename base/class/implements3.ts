class Security {
    x: number;
    y: number;
}

interface Point extends Security {
    z: number
}

let p: Point = {x:1, y: 2, z: 3}