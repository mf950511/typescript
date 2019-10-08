interface SearchFunc {
    (source: string, substring: string): boolean;
}

let myFunc: SearchFunc;
myFunc = function(sour: string, subs: string){
    let result = sour.search(subs)
    return result + ''
}