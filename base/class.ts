interface Person {
    firstName: string,
    lastName: string
}

class People{
    fullname: string;
    constructor(public firstName: string, public middle: string, public lastName: string){
        this.fullname = firstName + '  ' + middle + '  ' + lastName
    }
}

function greeter(person: Person){
    return 'hello' + person.firstName + '  ' + person.lastName
}

let user = new People('张','大','仙')
console.log(greeter(user))