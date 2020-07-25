// 深拷贝

function deepClone(obj) {
    let res;
    if(typeof obj !== 'object' || obj == null) {
        return obj;
    }

    if(obj instanceof Array) {
        res = []
    } else {
        res = {}
    }

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key])
        }      
    }
    return res;
}
let obj1 = {    
    a: 10,
    b: {
        x: 1,
        y: 2
    },
    c: [1,2,3]
}

let obj2 = deepClone(obj1);
obj2.a = 11;
obj2.b.x =19;
console.log(obj1)