function getName(name) {
    if (typeof name === 'string') {
        return name;
    }
    else {
        return name();
    }
}
