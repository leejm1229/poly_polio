class Book{
    constructor(title, pages, done){
        this.title = title;
        this.pages = pages;
        this.done = done;
    }

    finish(){
        let str = "";
        this.done === false ? str = "읽는 중" : str = "완독";
        return str;
    }
}

let git = new Book("깃교과서", 500, false);
console.log(git);
console.log(git.finish());

class Book2{
    
    // 2개 매개변수 입력
    constructor(title, price){
        // 매개변수로 받은 값을 동적 프로퍼티로 설정
        this.title = title;
        this.price = price;
    }

    buy(){
        console.log(`${this.title}은 가격이 ${this.price}`);
    }
}

let boo = new Book2("자료구조", 15000);
console.log(boo);  // 프로퍼티만 출력
console.log(boo.buy()); // 메서드를 호출