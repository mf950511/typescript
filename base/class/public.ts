class Animate {
    constructor(public readonly name: string) {
        this.name = name
    }
}

let a = new Animate('cat')
a.name = 'dog'
console.log(a.name)