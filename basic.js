/// ___variables____
var varVariable;
let letVariable;

///  ___data types___
// undefined
//Boolean
let typeBoolean = true; // '0' equals true, 0 equals false
console.log(typeof typeBoolean);
//Number
//String
let typeString = " String foo";
console.log(typeString);
console.log(typeString.toUpperCase());
console.log(typeString.toLowerCase());
console.log(typeString.trim());
console.log(typeString.charAt(3));
//BigINt
//Symbol

/// null

const CONST_VARIABLE = "Necessarily";

/// ___Arrays
let arrEmpty = [];
let lengthArr = arrEmpty.length;
let arrWithOne = [1];
let arrNew = arrEmpty.concat(arrWithOne);
let arR = [5, 6, 7, 8]; // for spread rest

// console.log(
//   [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
//   })
// );

// console.log(
//   [0, 1, 2, 3, 4].reduceRight(function (
//     previousValue,
//     currentValue,
//     index,
//     array
//   ) {
//     return previousValue + currentValue;
//   })
// );

/// Loops
// for
// for of
// for in
// while
// do while

///  __spread____

console.log(Math.max(arR)); // Nan
console.log(Math.max(...arR)); // 8

// nodelist -> array no exmaples

// destructuring

const [first, second, ...other] = arR;

const city = {
  name: "Moscow",
  age: 1000,
  country: "Russia",
};

/// _____fucntions____
let params = [5, 6, 7, 8];

function anyNameFunction(param1, param2, paramN, ...rest) {
  let sumParams = 0;
  for (item of rest) {
    sumParams += item;
    // rest.reduce((a, i) => a + i, 0);
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

//
let a = 5;
console.log(
  !(function (x) {
    a = x;
  })(7)
); // true
console.log(a); // 7

// API fetch

///___Drawning
/// SVG в html <svg>
//
/// canvas

// 'use strict'

(function () {
  "use strict";

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
})();

/// https://svgjs.dev/docs/3.0/
var input = document.querySelector("input[type=text]");
var draw = SVG().addTo("#drawing").viewbox(0, 0, 300, 140);
var text = draw.text(function (add) {
  add.tspan(input.value);
});

textPath = text.path("M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");

textPath
  .animate(1000)
  .ease("<>")
  .plot("M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80")
  .loop(true, true);

input.addEventListener("keyup", updateText(textPath));

function updateText(textPath) {
  return function () {
    textPath.tspan(this.value);
  };
}
