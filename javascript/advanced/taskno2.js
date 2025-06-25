const flat = [];
function flatten(arr) {
    for (const el of arr) {
        if (Array.isArray(el)) {
            flatten(el); 
        } else {
            flat.push(el);
        }
    }
    return flat;
}
let array =[1,[2,[3,4]]];
console.log(flatten(array));
