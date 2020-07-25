const elem = document.getElementById("debounceDemo1");
// let timer = null;
// elem.addEventListener("keyup", function(){

//     if(timer) {
//         clearTimeout(timer);
//     }
//     timer = setTimeout(function() {
//         console.log(elem.value);
//         timer = null
//     }, 500)
    
// });
elem.addEventListener("keyup", debounce(function() {
    console.log(elem.value)
}))

// 防抖
function debounce(fn, delay = 500) {
    let timer = null;
    return function() {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            fn.apply(this, arguments);
            timer = null;
        }, delay)
    };
}