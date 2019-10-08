function getCounter() {
    var counter = function (start) { };
    counter.interval = 5;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5;
