let x = 10;
let y = 4;
let result = 0;

result = x + y--;
console.log(result);
console.log(y);

result = x + y-- + 5;
console.log(result);
console.log(y);

result = ++x - y;
console.log(result);
console.log(y);