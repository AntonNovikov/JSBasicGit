// ___variables____
var varVariable;
let letVariable;
const CONST_VARIABLE = "Necessarily";

// _____fucntions____
let params = [5, 6, 7, 8];

function anyNameFunction(param1, param2, paramN, ...params) {
  let sumParams = 0;
  for (item of params) {
    sumParams += item;
  }
  return param1 + param2 + sumParams + paramN;
}
console.log(anyNameFunction(1, 2, 9, ...params)); // 38
console.log(anyNameFunction(1, 2, 9, 5, 6, 7, 8)); // 38

// arrow function
var b = (d) => {
  console.log(d);
};
b(42); // 42
let arrFunc = () => {
  console.log("I  executed function");
};
arrFunc(); // I  executed function

let a = 5;
console.log(
  !(function (x) {
    a = x;
  })(7)
); // true
console.log(a); // 7
