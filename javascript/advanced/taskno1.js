let sqfunc = (a)=>{
   return a*a;
}
let mapop=(arr,sqfunc)=>{
    let result=[];
    for(let i = 0;i<arr.length;i++){
        result.push(sqfunc(arr[i]));
    }
    console.log(result);
}
let array=[1, 2, 3, 4]
mapop(array,sqfunc);