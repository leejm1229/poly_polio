const obj ={
    product : "망고",
    type : "당",
    component : "설탕, 치자황색소",
    source : "필리핀"
};

console.log(obj);

console.log(obj.product);
console.log(obj.type);
console.log(obj.component);
console.log(obj.source);

console.log(obj['product']);
console.log(obj['type']);
console.log(obj['component']);
console.log(obj['source']);

let name = "product";
console.log(obj[name]);

name = "type";
console.log(obj[name]);