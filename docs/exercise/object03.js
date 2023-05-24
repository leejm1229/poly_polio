const kim ={
    firstName : "John",
    lastName : "Kim",
    age : 35,
    address : "Seoul"
};

console.log(kim);
console.log(kim.firstName);
console.log(kim.lastName);
console.log(kim.age);
console.log(typeof(kim.age));
console.log(kim.address);


// 객체나 배열과 같은 참조 타입의 변수인 경우, 
// const로 선언하더라도 변수가 가리키는 메모리 주소는 변경할 수 없지만 해당 객체나 배열의 내용은 변경할 수 있습니다.
kim.firstName = "남훈";
kim.lastName = "김";
kim.age = 19;

console.log(kim);
console.log(kim.firstName);
console.log(kim.lastName);
console.log(kim.age);
console.log(typeof(kim.age));
console.log(kim.address);