function birthCheck(){
    const date = new Date();
    const hour = date.getHours();
    const currentYear = date.getFullYear();
    let birthYear;
    let age;
    let birthstr;
    
    birthstr = prompt("태어난 날을 입력");
    if(birthstr.length == 4){
        if(birthstr){
            alert("태어난 해 " + birthstr);
            birthYear = paresInt(birthstr);
            alert(birthYear);

            if(!isNaN(birthYear)){
                let age = currentYear - birthYear + 1;
                if(age < 20){
                    alert("미성년자");
                }else{
                    alert("성인");
                }
            }
            else{
                alert('야스');
            }
            alert(`${age}살`);
        } else{
            console.log("다시");
        }
    } else{
        console.log("다시")
    }
}