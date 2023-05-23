function change() {
    const rawInput = prompt("버튼 크기의 사이즈 입력");

    const width = Number(rawInput);
    const height = Number(rawInput);


    const button = document.getElementById("mybutton");

    button.style.width = `${width}px`;
    button.style.height = `${height}px`;
}
const button = document.getElementById("mybutton");
button.addEventListener("click", change);
