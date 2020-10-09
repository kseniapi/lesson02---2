const num = 266219;
const arr = num.toString().split('').reduce(function (a, b) {
  return a * b;
});
console.log(arr);

const pow = arr ** 3;
console.log(String(pow).slice(0, 2));