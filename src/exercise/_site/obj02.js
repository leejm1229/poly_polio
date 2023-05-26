const obj ={
    product : "망고",
    type : "당",
    component : "설탕, 치자황색소",
    source : "필리핀"
};

for(let key in obj){
    console.log(key);
    obj[key] += "===";
}

console.log(obj);