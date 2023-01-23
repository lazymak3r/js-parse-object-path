const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};



// Variant with loop
function get(obj, path, defaultValue) {
    const parsedPath = path.split('.');

    let value = obj;
    parsedPath.forEach(p => {
        value = value?.[p];
    });

    return defaultValue ? value || defaultValue : value;
}

// Variant with recurstion
function get(obj, path, defaultValue) {
    if (path) {
        const parsedPath = path.split('.');
        const value = obj?.[parsedPath[0]];
        const restPath = parsedPath.slice(1).join('.');

        return get(value, restPath, defaultValue)
    }
    return defaultValue ? obj || defaultValue : obj;
}

console.log(get(obj, 'a.b'));   // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e'));   // 'f'
console.log(get(obj, 'x.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
console.log(get(obj, 'a.x.e', 'My default value')); // My default value