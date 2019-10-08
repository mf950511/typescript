function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log('我是reset');
    };
    return counter;
}
var c = getCounter();
c(10);
c.interval = 5;
c.reset();
