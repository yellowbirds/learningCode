// 节流
let elem = document.getElementById("drag1");
let timer = null;
elem.addEventListener("drag", throttle((e) => {
        console.log(e.offsetX,e.offsetY);
}, 2000));

function throttle(fn, delay = 500) {
    let timer = null;
    return function() {
        if(timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null
        }, delay)
    }
}