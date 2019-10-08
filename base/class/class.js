var Animate = /** @class */ (function () {
    function Animate(name) {
        this.name = name;
    }
    return Animate;
}());
var a = new Animate('cat');
console.log(a.name);
a.name = 'dog';
console.log(a.name);
