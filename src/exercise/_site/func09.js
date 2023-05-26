function print(i){
    console.log(i+"번째 함수 호출");
}

function callThreeTimes(callback){
    for(let i=0; i<3; i++){
        callback(i);
    }
}

callThreeTimes(print);