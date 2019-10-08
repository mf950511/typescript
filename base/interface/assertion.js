function getLength(some) {
    if (some.length) {
        return some.length;
    }
    else {
        return some.toString().length;
    }
}
console.log(getLength(123));
