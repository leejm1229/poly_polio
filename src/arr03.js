// 자바스크립트에서는 홀따옴표와 쌍따옴표를 모두 사용가능
let fruits =['사과', "배", '오렌지', "바나나"];

console.log(fruits);

// fruits.splice(2, 1)는 fruits 배열에서 인덱스 2부터 시작하여 1개의 요소를 제거합니다. 
let result = fruits.splice(2,1);
console.log(result);
console.log(fruits);

fruits.push(result[0]);
console.log(fruits);