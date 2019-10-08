var Security = /** @class */ (function () {
    function Security() {
    }
    Security.prototype.alert = function () {
        console.log('我是安全');
    };
    Security.prototype.onOpen = function () {
        console.log('我被打开了');
    };
    Security.prototype.onClose = function () {
        console.log('我被关闭了');
    };
    return Security;
}());
var s = new Security();
s.alert();
s.onOpen();
s.onClose();
