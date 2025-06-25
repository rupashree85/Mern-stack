function merge(obj1, obj2, resolver) {
  return Object.entries(obj2).reduce((acc, [key, value]) => {
    if (key in acc) {
        acc[key]=resolver(acc[key], value);
    } 
    else{
         acc[key]=value;
    }
    return acc;
  }, {...obj1});
}
const obj1={'a':3,'b':7, 'd':10};
const obj2={'b':3,'c':5, 'd':17};
console.log(merge(obj1, obj2, (x,y)=>Math.max(x, y)))
