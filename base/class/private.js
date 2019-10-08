var Animate = /** @class */ (function () {
    function Animate(name) {
        this.name = name;
    }
    return Animate;
}());
var a = new Animate('dog');
console.log(a.name);
a.name = 'cat';
