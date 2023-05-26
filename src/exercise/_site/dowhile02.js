let i = 5;
let status = false;

do{
    status = true;
    console.log(i);
    i--;
    if(i==0) status=false;
}while(status);