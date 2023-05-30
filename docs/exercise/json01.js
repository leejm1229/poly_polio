let student = {name : "홍길동", major : "데이터 학과", grade : 2};
console.log(student);
console.log(typeof(student));

let jsonStr = JSON.stringify(student);
console.log(typeof(jsonStr));
console.log(jsonStr);

let obj = JSON.parse(jsonStr);
console.log(typeof(obj));
console.log(obj);