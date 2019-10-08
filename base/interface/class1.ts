interface ClockInterface {
    currentDate: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentDate: Date;
    setTime(d: Date) {
        this.currentDate = d
    }
    constructor(d: number, f: number){}
}