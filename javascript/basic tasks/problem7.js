const isPrime = (n) => {
  if (n <= 1) return false;         
  if (n === 2) return true;        
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
};
let no = 5;
if(isPrime(no)){
    console.log(no + " is a prime no.");
}
else{
    console.log(no + " is not a prime no.");
}