function addNum(...numbers){
    let sum = 0;

    for(let number of numbers){
        sum += number;
    }   

    return sum;
}

console.log(addNum(10, 20, 30, 40, 50));