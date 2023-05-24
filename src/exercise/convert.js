const rawInput = prompt("inch 단위의 숫자를 입력");

const inch = Number(rawInput);
const cm = inch * 2.54;

alert(`${inch}inch는 ${cm}cm입니다.`);
