interface Alarm {
    alert();
}

interface Light extends Alarm {
    onOpen();
    onClose();
}