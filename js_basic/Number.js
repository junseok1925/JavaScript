// 데이터 타입
//runtime : run 하는 time
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 떄 

//typeof : 해당되는 변수의 타입을 트래킹해주는 연산자

// 정수형 숫자(integer)

let num1 = 10;
// let num1 = "10" -> String
console.log(num1); // 10
console.log(typeof num1); // "number"

// 실수형 숫자(Float)

let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // "number"

// 지수형 숫자(Exponential)

let num3 = 2.5e5; // 2.5 x 10^5 (2.5 x 10의 5제곱)
console.log(num3); // 250000
console.log(typeof num3); // "number"

// NoN (Not a Number)

let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number"

//NaN(Not a Number)은 자바스크립트에서 숫자가 아님을 나타내는 값. 보통 수학적으로 정의되지 않는 계산을 수행하거나, 숫자가 아닌 값을 숫자로 변환하려고 할 때 발생.

// Infinity

let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"


// -Infinity

let num6 = -1 / 0;
console.log(num6); // -Infinity
