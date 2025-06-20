let arr = [3, 45, 23, 47];
let printsum= (array)=>{
    let sum = 0;
    for(let no of arr){
        sum +=no;
    }
    console.log("sum of all numbers in an array:" + sum);
}
printsum(arr);
let sumvalue= arr.reduce((acc,curr)=>acc+curr,0);
console.log(sumvalue);
