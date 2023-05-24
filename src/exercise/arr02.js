const todos = ["우유구매", "업무 매일 확인하기", "필라테스 수업"];

console.log(todos);

for(let i=0; i<todos.length; i++){
    console.log(todos[i]);
}

todos.push("저녁 식사 준비하기");
todos.push("피아노 연습하기");

todos[1] = "수정";
console.log(todos);
for(let i=0; i<todos.length; i++){
    console.log(todos[i]);
}
