function apply(func, value) {
  return func.reduce((acc, fn) => fn(acc), value);
}
let functions = [
  x => x + 2,
  x => x * 3,
  x => x - 5
];
const input = 4;
console.log(apply(functions, input)); 