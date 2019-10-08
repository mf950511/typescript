let isUse: boolean = true
let num: number = 20013
let num2: number = 0xf00d
let str: string = '123123'
let sentence: string = `我是${str}`
let list: number[] = [1,2,3]
let list2: Array<number> = [2,3,4]
let list3: Array<any> = [3,'4',5]
let list4: [number, string]
list4 = [3, '4']
list4 = [3, '4']
list4[1].substr(1)
enum Color {Red = 1, Blue = 2, Yellow = 4}
let c: Color = Color.Red
console.log(c)
enum People {Big = 1, Small, Middle}
let peopleName: string = People[2]
console.log(peopleName)
let notSure: any = 4

// notSure.ifItExiat()
notSure.toFixed()
let notSure2: Object = 4

function test(): void {
    console.log('返回工')
}
let u: undefined = undefined
let n: null = null

num = u
console.log(num)


function error(message: string): never {
    throw new Error()
}

function fail(){
    return error('发生错误了')
}

function infiniteLoop(): never {
    while(true){

    }
}

let someValue: any = '我是一匹野马'
let stringLen: number = (<string>someValue).length
let stringLen2: number = (someValue as string).length
console.log(stringLen, stringLen2)