type Name = string
type NameResolve = () => string;
type NameOrResolve = Name | NameResolve
function getName(name: NameOrResolve):Name {
    if(typeof name === 'string') {
        return name
    } else {
        return name()
    }
}