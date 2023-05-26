// 얕은 복사
product = ["우유", "식빵"];
console.log(product);

const goods = product;
console.log(goods);

goods[1] = "치즈";
console.log(product);

// 깊은 복사
const food = [...product];
console.log(food);
product.push("토마토");
console.log(product);
console.log(food);