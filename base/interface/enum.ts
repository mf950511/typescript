enum Days { sun, mon = 3, tue, wed, thu, fri, sat = <any>"S"}

console.log(Days['sun'] === 0)
console.log(Days['tue'] === 4)
console.log(Days['sat'] === 8)