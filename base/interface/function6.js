function reverse(source) {
    if (typeof source === 'number') {
        return Number(source.toString().split('').reverse().join(''));
    }
    else if (typeof source === 'string') {
        return source.split('').reverse().join('');
    }
}
console.log(reverse(123123), reverse('asdasdasd'));
