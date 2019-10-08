var People = /** @class */ (function () {
    function People(firstName, middle, lastName) {
        this.firstName = firstName;
        this.middle = middle;
        this.lastName = lastName;
        this.fullname = firstName + '  ' + middle + '  ' + lastName;
    }
    return People;
}());
function greeter(person) {
    return 'hello' + person.firstName + '  ' + person.lastName;
}
var user = new People('张', '大', '仙');
console.log(greeter(user));
