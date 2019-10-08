interface Alarm{
    alert()
}
class Door{

}

class SecurityDoor extends Door implements Alarm {
    alert(){
        console.log('我是防盗门')
    }
}

class Car implements Alarm {
    alert(){
        console.log('我是警车')
    }
}

let s = new SecurityDoor()
s.alert()

let c = new Car()
c.alert()