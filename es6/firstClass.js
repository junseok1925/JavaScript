//일급객체로써의 함수

// 변수에 함수를 할당힐 수 있다.
// 함수가 마치 값처럼 취급된
// 함수가 나중에 사용될 수 있도록 조치가 되어있다
//변수 sayhello에 'hello'를 콘솔출력하는 함수가 담겨있다
const sayhello = function(){
    console.log('hello');
}

// 함수를 인자로 다른 함수에 전달할 수가 있다.
// 고차함수 : 함수를 인자로 받거나 return하는 함수
// 콜백함수 : 매개변수로써 쓰이는 함수
function callFunction(func){
    // 매개변수로 받은 변수가 사실, 함수이다 
    func();
}

const hello = function(){
    console.log("hello");
};

callFunction(hello);

// ===============================

function createAdder(num){
    return function(x){
        return x + num;
    };
}

const addFive = createAdder(5);
// 본 식은 아래와 같이 풀어줄수있다
// const addFive = function(x){
//     return x + 5; //createAdder(5) 이므로 매개변수num의 값을 5로 대체
// }

console.log(addFive(10)); //15

//일급객체로써의 함수 2

const teemo  = {
    name: "Teemo",
    age: 27,
    isMarried: false,
    sayHello: function(){
                console.log(`Hello my name is ${this.name}`)
             },
    //화살표 함수로 -> 화살표함수는 this, 바인딩을 지원하지않는다 그러므로 'undefined' 출력
    // sayHello: () => {
    //     console.log(`Hello my name is ${this.name}`)
    // }
}

teemo.sayHello();

//==========================
// 배열의 요소로 함수를 할당

const myArr =[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    }
];
//myArr의 0번째 요소 
console.log(myArr[0](1,3));
//myArr의 1번째 요소
console.log(myArr[1](10,7))

//===============================
//multiplyByTwo
function multiplyBy(num){
    return function(x){
        return x * num;
    }
};

function add(x,y){
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
// const multiplyByTwo = function (x){
//         return x * 2;
// };
const multiplyByThree = multiplyBy(3);
// const multiplyByThree = function (x){
//         return x * 3;
// };
console.log(multiplyByTwo(10));     //20
console.log(multiplyByThree(10));   //30
//                        x                   y
const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(${result}); //40
