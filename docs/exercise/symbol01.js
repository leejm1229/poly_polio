let var1 = Symbol();
let var2 = Symbol();

if(var1 == var2){
    console.log("동일");
}else{
    console.log("유일성 보장으로 서로 다르다.");
    console.log(var1);
    console.log(var2);
}