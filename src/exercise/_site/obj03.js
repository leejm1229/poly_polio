const obj ={
    name : "구름",

    eat : function(food){
        console.log(name + '이 ' + food + '를 먹었습니다.')
    }
};

for(let key in obj){
    console.log(key);
    obj[key] += "===";
}

console.log(obj);