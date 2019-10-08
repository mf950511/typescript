class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string
}
// 数字索引类型为字符串索引类型子集
interface NotOkey{
    [x: number]: Dog;
    [x: string]: Animal
}