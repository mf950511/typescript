var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGeneric = new GenericNumber();
myGeneric.zeroNumber = 0;
myGeneric.add = function (num1, num2) { return num1 + num2; };
console.log(myGeneric.add(123, 123));
