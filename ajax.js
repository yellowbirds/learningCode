function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    console.log(xhr.status)
                } else if (xhr.status === 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    });
    
    return p
}

// console.log(ajax("./ajax.json"))

let data = ajax('./ajax.json').then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})
