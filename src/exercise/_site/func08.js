function print(i){
    console.log(i+"번째 함수 호출");
}

function callThreeTimes(aaa){
    for(let i=0; i<3; i++){
        aaa(i);
    }
}

callThreeTimes(print);