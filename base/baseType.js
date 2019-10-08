var isUse = true;
var num = 20013;
var num2 = 0xf00d;
var str = '123123';
var sentence = "\u6211\u662F" + str;
var list = [1, 2, 3];
var list2 = [2, 3, 4];
var list3 = [3, '4', 5];
var list4;
list4 = [3, '4'];
list4 = [3, '4'];
list4[1].substr(1);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 4] = "Yellow";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
var People;
(function (People) {
    People[People["Big"] = 1] = "Big";
    People[People["Small"] = 2] = "Small";
    People[People["Middle"] = 3] = "Middle";
})(People || (People = {}));
var peopleName = People[2];
console.log(peopleName);
var notSure = 4;
// notSure.ifItExiat()
notSure.toFixed();
var notSure2 = 4;
function test() {
    console.log('返回工');
}
var u = undefined;
var n = null;
num = u;
console.log(num);
function error(message) {
    throw new Error();
}
function fail() {
    return error('发生错误了');
}
function infiniteLoop() {
    while (true) {
    }
}
var someValue = '我是一匹野马';
var stringLen = someValue.length;
var stringLen2 = someValue.length;
console.log(stringLen, stringLen2);
