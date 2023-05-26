const test = {

    foo : function(){
        console.log("foo 메소드의 this");
        // this, 자신의 메서드를 가지고 있는 상위 객체(test)를 가리킨다.
        console.log(this);
    },

    bar : () => {
        console.log("bar 메소드의 this");
        // 함수도 객체이다.? 자바스크립트만의 특징
        // 화살표 함수는 자식의 메서드를 가지고 있는 상위 객체(test)를 가리키지 않고
        // 자기 자신의 함수의 객체를 가리킨다
        console.log(this);
    }
}

test.foo(); // test의 객체 this가 출력
test.bar(); // 함수의 this가 출력