class Animate {
    public name: string;
    private constructor(name: string){
        this.name = name
    }
}

class Cat extends Animate {
    constructor(name){
        super(name)
    }
}