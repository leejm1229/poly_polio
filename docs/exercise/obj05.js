const student = {};
let columns = ["firstname", "lastname", "age", "addr"];

let poly = [["철수", "김", 19], ["길동", "박", 39]];
for(let item of poly){
    let col = {}
    for(let i=0; i<columns.length; i++){
        col[columns[i]] = item[i];
    }

    let key = item[0];
    for(let column of columns){
        if(col[column] == undefined){
            col[column] = "비어있음";
        }
    }
    student[key] = col;
}

console.log(student);