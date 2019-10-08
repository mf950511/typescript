class Animate {
    private name: string;
    constructor(name: string){
        this.name = name
    }
}

class Cat extends Animate {
    public constructor(name) {
        super(name)
        console.log(this.name)
    }
}

let a = new Cat('cat')
