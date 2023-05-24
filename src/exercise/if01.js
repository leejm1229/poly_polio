const currentYear = 2023;
let birthYear;
let age;

let birthStr;
let birthNum;
// birthStr = prompt("태어난 년도"); //문자열로 받아옴
// birthNum = parseInt(birth); //문자열로 받아온 것 숫자로 변환
birthYear = parseInt(prompt("태어난 년도")); //한줄로 만들기

age = currentYear - birthYear + 1;

if (age < 20) {
    alert("성인이 아닙니다.")
}
alert(`${currentYear}년 현재, ${age}세입니다.`);