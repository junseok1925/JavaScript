
//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

function a (x) {
	console.log(x);
	var x;
	console.log(x);
	var x = 2;
	console.log(x);
}
a(1);

//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var x = 1;
	console.log(x);
	var x;
	console.log(x);
	var x = 2;
	console.log(x);
}
a(1);

//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var x;
	var x;
	var x;

	x = 1;
	console.log(x);
	console.log(x);
	x = 2;
	console.log(x);
}
a(1);

//=======================================================

//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	function b() { }
	console.log(b);
}
a();

//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var b; // 변수 선언부 호이스팅
	function b() { } // 함수 선언은 전체를 호이스팅

	console.log(b);
	b = 'bbb'; // 변수의 할당부는 원래 자리에

	console.log(b);
	console.log(b);
}
a();

//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var b; // 변수 선언부 호이스팅
	var b = function b() { } // 함수 선언은 전체를 호이스팅

	console.log(b);
	b = 'bbb'; // 변수의 할당부는 원래 자리에

	console.log(b);
	console.log(b);
}
a();

// 함수 선언문, 함수 표현식
// 함수 정의의 3가지 방식
// 함수 선언문. 함수명 a가 곧 변수명
// function 정의부만 존재, 할당 명령이 없는 경우
function a () { /* ... */ }
a(); // 실행 ok

// 함수 표현식. 정의한 function을 별도 변수에 할당하는 경우
// (1) 익명함수표현식 : 변수명 b가 곧 변수명(일반적 case에요)
var b = function () { /* ... */ }
b(); // 실행 ok

// (2) 기명 함수 표현식 : 변수명은 c, 함수명은 d
// d()는 c() 안에서 재귀적으로 호출될 때만 사용 가능하므로 사용성에 대한 의문
var c = function d () { /* ... */ } 
c(); // 실행 ok
d(); // 에러!

// 함수 선언문은 전체를 hoisting
function sum (a, b) { // 함수 선언문 sum
	return a + b;
}

// 변수는 선언부만 hoisting

var multiply; 

console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function (a, b) { // 변수의 할당부는 원래 자리
	return a + b;
};

...

console.log(sum(3, 4));

// 함수 선언문으로 짠 코드
// 100번째 줄 : 시니어 개발자 코드(활용하는 곳 -> 200군데)
// hoisting에 의해 함수 전체가 위로 쭉!
function sum (x, y) {
	return x + y;
}

...
...

var a = sum(1, 2);

...

// 함수 선언문으로 짠 코드
// 5000번째 줄 : 신입이 개발자 코드(활용하는 곳 -> 10군데)
// hoisting에 의해 함수 전체가 위로 쭉!
function sum (x, y) {
	return x + ' + ' + y + ' = ' + (x + y);
}

...

var c = sum(1, 2);

console.log(c);

...

console.log(sum(3, 4));

// 함수 표현식으로 짠 코드
// 함수 선언부만 위로 쭉!
// 이 이후부터의 코드만 영향을 받아요!
var sum = function (x, y) {
	return x + y;
}

...
...

var a = sum(1, 2);

...

// 함수 표현식으로 짠 코드
// 함수 선언부만 위로 쭉!
// 이 이후부터의 코드만 영향을 받아요!
var sum = function (x, y) {
	return x + ' + ' + y + ' = ' + (x + y);
}

...

var c = sum(1, 2);

console.log(c);


