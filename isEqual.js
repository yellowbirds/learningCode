// isEqual

function isEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 == obj2;
    }

    if (obj1 === obj2) {
        return true
    }
    let obj1Keys = Object.keys(obj1).length;
    let obj2Keys = Object.keys(obj2).length;

    if (obj1Keys !== obj2Keys) {
        return false
    }

    for (let key in obj1) {
        let result = isEqual(obj1[key], obj2[key]);
        if(!result) {
            return false
        }
    }
    return true
}

// console.log(isEqual({x: 1}, 1))

const obj1 = {
    a: 100,
    b: {
        x: 1,
        y: 2
    }

}
const obj2 = {
    a: 100,
    b: {
        x: 1,
        y: 2
    }
}

console.log(isEqual(obj1, obj2))