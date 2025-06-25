function groupby(arr, key){
    const result = arr.reduce((grouped, element)=>{
        const value=element[key];
        if(!grouped[value]){
            grouped[value]=[];
        }
        grouped[value].push(element);
        return grouped;
    },{})
    return result;
}
let array=[{ name: "Rupa", city: "Delhi" },
  { name: "rahul", city: "Hyderabad" },
  { name: "Kishore", city: "Delhi" }
];
console.log(groupby(array, "city"))