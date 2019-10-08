class Animate {
    public name: string;
    protected constructor(name: string){
        this.name = name
    }
}
class Cat extends Animate {
    constructor(name){
        super(name)
    }
}

let a = new Animate('cat')