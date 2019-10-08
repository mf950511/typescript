class Animate {
    public name: string;
    constructor(name: string){
        this.name = name
    }
}

let a = new Animate('cat')
console.log(a.name)
a.name = 'dog'
console.log(a.name)

