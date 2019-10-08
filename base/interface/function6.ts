function reverse(source: number): number;
function reverse(source: string): string;
function reverse(source: string | number): string | number {
    if(typeof source === 'number') {
        return Number(source.toString().split('').reverse().join(''))
    } else if(typeof source === 'string') {
        return source.split('').reverse().join('')
    }
}

console.log(reverse(123123), reverse('asdasdasd'))