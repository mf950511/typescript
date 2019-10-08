interface ClockInterface {
    new (hour: number, minite: number)
}

class Clock implements ClockInterface {
    currentDate: Date;
    constructor(d: number, h: number){}
}