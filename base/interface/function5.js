function sum(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    rest.forEach(function (item) {
        arr.push(item);
    });
    return arr;
}
var a = [];
console.log(sum(a, 2, 3, 4));
