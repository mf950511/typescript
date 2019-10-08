function greeter(person) {
    return 'Hello' + person.firstName + ',' + person.lastName;
}
var user = {
    firstName: '张',
    lastName: 123
};
document.body.innerHTML = greeter(user);
