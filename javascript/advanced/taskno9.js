function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };;
}
const log = () => console.log("Debounced!");
const debouncedLog = debounce(log, 1000);
let i = 0;
let interval = setInterval(() => {
    console.log("Calling", ++i); 
    debouncedLog();              
    if (i === 4) clearInterval(interval);
}, 200);