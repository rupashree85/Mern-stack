let largest=(array)=>{
    let largest = null;
    for(let element of array){
        if(element>largest){
            largest= element;
        }
    }
    console.log("maximum value in the given array:" + largest);
}
let arr=[3, 45, 78, 12, 16];
largest(arr);