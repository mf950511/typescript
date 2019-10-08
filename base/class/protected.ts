class Animate {
    protected name: string;
    constructor(name: string){
        this.name = name
    }
}

class Cat extends Animate {
    constructor(name){
        super(name)
        console.log(this.name)
    }
}

let a = new Cat('cat')
