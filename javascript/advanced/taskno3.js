function unique(arr){
   const result=arr.filter((item, index)=>{
    return arr.indexOf(item) === index;
   });
   console.log(result);
}
let array=[1,2,2,4,3,];
unique(array);