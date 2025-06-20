let input = "Malayalam"
let palindromecheck =(input)=>{
  let string = input.toLowerCase()
  let reversed = string.split('').reverse().join('');
  if(string==reversed){
    console.log(input+ " is a palindrome");
  }
  else{
    console.log(input+ "is not a palindrome")
  }
}
palindromecheck(input);