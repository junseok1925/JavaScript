//  ES6
// 1. es6는 javaScript의 버전 중 하나로, 2015년에 발표
// 2. js개발자들이 보다 쉽고 효율적으로 코드를 작성할 수 있도록 개선

// ## let, const

// * 기존에 변수 선언을 위해 존재하던 ```var```를 대체해서 나온 변수 선언에 사용 되는 키워드

// 1. 선언 : 변수명을 js에 알리는것
// 2. 할당 : 변수에 값을 저장하는 것( = 할당연산자)

// ### let
// * 재할당이 가능, 재선언 불가능

let value = "value1"
console.log(value) // value1

value = "value2" // 재할당 가능
console.log(value) // value2

let value = "value3" // 재선언 불가능, SyntaxError: Identifier 'value' has already been declared


// ### const
// * 재할당, 재선언 불가능, 초기값이 없으면 선언이 불가능


const value; // 초기값 없이 선언 불가능, SyntaxError: Missing initializer in const declaration
---
const value = "value1"
console.log(value) // value1

value = "value2" // 재할당 불가능, TypeError: Assignment to constant variable.

const value = "value2" // 재선언 불가능, SyntaxError: Identifier 'value' has already been declared


//var은 재할당, 재선언이 가능

// 화살표 함수
//기존의 방식
function add(){
}
var add = function(){
}

//화살표 함수로 표현
var add = ()=> {
    return 1;
}

//만약 return문이 한줄코드면 생략가능
var add = () => 1;

// 매개변수가 한개면 ()괄호 생략가능
var add = x => 1;

//삼항 연산자
// (조건 ? true인경우 : flase인경우)

console.log(true ? '참' : '거짓');  //참
console.log(false ? '참' : '거짓'); //거짓
console.log(1 === 1 ? '참' : '거짓'); //참
console.log(1 !== 1 ? '참' : '거짓'); //거짓