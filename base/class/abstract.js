var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animate = /** @class */ (function () {
    function Animate(name) {
        this.name = name;
        this.name = name;
    }
    return Animate;
}());
// let a = new Animate('cat')  抽象类不允许被实现
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log('我在吃东西');
    };
    // 必须被实现
    Cat.prototype.sayHi = function () {
        console.log('hello');
    };
    return Cat;
}(Animate));
var a = new Cat('cat');
