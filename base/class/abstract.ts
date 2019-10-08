abstract class Animate {
    public constructor(public name: string) {
        this.name = name
    }
    public abstract sayHi()
}

// let a = new Animate('cat')  抽象类不允许被实现

class Cat extends Animate {
    public eat() {
        console.log('我在吃东西')
    }
    // 必须被实现
    public sayHi(){
        console.log('hello')
    }
}

let a = new Cat('cat')