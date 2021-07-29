let a = 5;
console.log(
  !(function (x) {
    a = x;
  })(7)
);
console.log(a);
