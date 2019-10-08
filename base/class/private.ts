class Animate {
    private name: string;
    constructor(name: string){
        this.name = name
    }
}

let a = new Animate('dog')
console.log(a.name)
a.name = 'cat'