interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return 'Hello' + person.firstName + ',' + person.lastName
}

let user = {
    firstName: '张',
    lastName: 123
}

document.body.innerHTML = greeter(user)