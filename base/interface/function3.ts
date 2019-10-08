interface SearchInter {
    (source: string, str: string): boolean;
}

let se: SearchInter;
se = function(source: string, str: string): boolean {
    return source.search(str) !== -1
}

console.log(se('asdasd', 'as'))