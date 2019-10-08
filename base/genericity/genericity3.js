function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
var a = copyFields(x, { b: 14, d: 15 });
console.log(a);
