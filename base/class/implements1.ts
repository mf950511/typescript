interface Alarm {
    alert();
}
interface Light {
    onOpen();
    onClose();
}

class Security implements Alarm, Light {
    alert(){
        console.log('我是安全')
    }
    onOpen(){
        console.log('我被打开了')
    }
    onClose(){
        console.log('我被关闭了')
    }
}

let s = new Security()
s.alert()
s.onOpen()
s.onClose()