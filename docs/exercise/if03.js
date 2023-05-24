const date = new Date(); //현재 날짜와 시간을 갖는 객체 생성
const hour = date.getHours();

if (hour < 12) {
    alert('오전입니다.');
}
else {
    alert('오후입니다.');
}

console.log("년도" + date.getFullYear());
console.log("월" + date.getMonth());
console.log("일" + date.getDate());
console.log("시" + date.getHours());
console.log("분" + date.getMinutes());
console.log("초" + date.getSeconds());
